import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Instagram, Twitter, Github, Mail } from 'lucide-react'
import { profile } from '../data/works'
import styles from './Footer.module.css'
import { FaBehance } from "react-icons/fa";

const BehanceIcon = () => (
  <FaBehance />
)

const iconMap = { linkedin: Linkedin, instagram: Instagram, twitter: Twitter, github: Github, behance: FaBehance }

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.role}>{profile.role}</p>
        </div>
        <div className={styles.socials}>
          {Object.entries(profile.socials).map(([key, url]) => {
            const Icon = iconMap[key]
            return Icon ? (
              <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={key}>
                <Icon size={18} />
              </a>
            ) : null
          })}
          <a href={`mailto:${profile.email}`} aria-label="email">
            <Mail size={18} />
          </a>
        </div>
        <p className={styles.copy}>© {year} {profile.name.split(' ')[0]}. All rights reserved.</p>
      </div>
    </footer>
  )
}
