import React, { useState, useEffect } from 'react'
import { works } from '../data/works'
import WorkCard from '../components/WorkCard'
import styles from './Works.module.css'

const ALL = 'All'

export default function Works() {
  const categories = [ALL, ...Array.from(new Set(works.map(w => w.category)))]
  const [active, setActive] = useState(ALL)

  // Fungsi sorting dari tahun terbaru ke terlama
  const sortByDate = (a, b) => parseInt(b.date) - parseInt(a.date)

  // Filter berdasarkan kategori aktif, lalu urutkan berdasarkan tahun
  const filtered = (active === ALL ? works : works.filter(w => w.category === active))
    .sort(sortByDate)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible) }),
      { threshold: 0.1 }
    )
    document.querySelectorAll(`.${styles.fadeIn}`).forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [filtered])

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.container}>
          <p className={styles.label}>Portfolio</p>
          <h1 className={styles.title}>All Works</h1>
          <p className={styles.sub}>
            A collection of projects, analyses, and deliverables from my professional journey.
          </p>
        </div>
      </div>

      <div className={styles.container} style={{ paddingBottom: 80 }}>
        {/* Filter tabs */}
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
              <span className={styles.filterCount}>
                {cat === ALL ? works.length : works.filter(w => w.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No works in this category yet.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map(w => (
              <div key={w.id} className={styles.fadeIn}>
                <WorkCard work={w} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
