import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/works'
import styles from './Navbar.module.css'

const handleScroll = (id) => {
  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  setMenuOpen(false);
};


const handleHomeClick = () => {
  if (location.pathname !== "/") {
    navigate("/");
  }

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 100);

  setMenuOpen(false);
};


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoName}>{profile.name.split(' ')[0]}</span>
          <span className={styles.logoDot}>.</span>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <Link
            to="/"
            className={location.pathname === '/' ? styles.active : ''}
            onClick={() => {
              setMenuOpen(false);

              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 50);
            }}
          >
            Home
          </Link>
          <li><Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/works" className={location.pathname === '/works' ? styles.active : ''}>Works</Link></li>
          <li>
            <button onClick={() => handleScroll("contact")}>
              Contact
            </button>
          </li>
        </ul>

        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  )
}
