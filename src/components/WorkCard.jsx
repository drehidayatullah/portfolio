import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { categoryColors } from '../data/works'
import styles from './WorkCard.module.css'

export default function WorkCard({ work }) {
  const color = categoryColors[work.category] || { bg: '#F0EEE8', text: '#555' }

  return (
    <Link to={`/works/${work.id}`} className={styles.card}>
      <div className={styles.thumb} style={{ background: work.thumbnail ? undefined : 'var(--accent-muted)' }}>
        {work.thumbnail
          ? <img src={work.thumbnail} alt={work.title} />
          : <PlaceholderIllustration category={work.category} />
        }
        <span className={styles.arrow}><ArrowUpRight size={20} /></span>
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.cat} style={{ background: color.bg, color: color.text }}>
            {work.category}
          </span>
          <span className={styles.date}>{work.date}</span>
        </div>
        <h3 className={styles.title}>{work.title}</h3>
        <p className={styles.summary}>{work.summary}</p>
        <div className={styles.tags}>
          {work.tags.slice(0, 3).map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

function PlaceholderIllustration({ category }) {
  const icons = {
    "Project Management": "📋",
    "Business Analysis": "📊",
    "Data & Reporting": "📈",
    "Strategy": "🎯",
  }
  return (
    <div className={styles.placeholder}>
      <span>{icons[category] || "📁"}</span>
    </div>
  )
}
