import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { works, categoryColors } from '../data/works'
import styles from './WorkDetail.module.css'

export default function WorkDetail() {
  const { id } = useParams()
  const work = works.find(w => w.id === id)

  if (!work) return <Navigate to="/works" replace />

  const color = categoryColors[work.category] || { bg: '#F0EEE8', text: '#555' }

  return (
    <div className={styles.page}>
      {/* Back button */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <Link to="/works" className={styles.back}>
            <ArrowLeft size={16} /> Back to Works
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroMeta}>
            <span className={styles.cat} style={{ background: color.bg, color: color.text }}>
              {work.category}
            </span>
            <span className={styles.date}>
              <Calendar size={13} /> {work.date}
            </span>
          </div>
          <h1 className={styles.title}>{work.title}</h1>
          <p className={styles.summary}>{work.summary}</p>
          <div className={styles.tags}>
            {work.tags.map(t => (
              <span key={t} className={styles.tag}><Tag size={11} /> {t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail */}
      {work.thumbnail && (
        <div className={styles.thumbWrapper}>
          <div className={styles.container}>
            <img src={work.thumbnail} alt={work.title} className={styles.thumb} />
          </div>
        </div>
      )}

      {/* Content blocks */}
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.content}>
            {work.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </div>
        </div>
      </div>

      {/* More works */}
      <div className={styles.more}>
        <div className={styles.container}>
          <p className={styles.moreLabel}>Next</p>
          <Link to="/works" className={styles.moreLink}>
            See all works <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
          </Link>
        </div>
      </div>
    </div>
  )
}

function autoResizeIframe(e) {
  const iframe = e.target
  try {
    iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px'
  } catch (_) { }
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'heading':
      return <h2 className={styles.blockHeading}>{block.text}</h2>

    case 'subheading':
      return <h3 className={styles.blockSubheading}>{block.text}</h3>

    case 'paragraph':
      return <p className={styles.blockParagraph}>{block.text}</p>

    case 'image':
      return (
        <figure className={styles.blockImage}>
          {block.src ? (
            <img src={block.src} alt={block.caption || ''} />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>📷</span>
              <p>Add image path in works.js</p>
            </div>
          )}
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )

    case 'html':
      return (
        <figure className={styles.blockHtml}>
          <iframe
            src={block.src}
            title={block.caption || ''}
            scrolling="no"
            onLoad={autoResizeIframe}
          />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )

    case 'list':
      return (
        <ul className={styles.blockList}>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )

    case 'quote':
      return (
        <blockquote className={styles.blockQuote}>
          {block.text}
          {block.author && <cite>— {block.author}</cite>}
        </blockquote>
      )

    default:
      return null
  }
}