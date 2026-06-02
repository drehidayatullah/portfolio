import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Mail, Linkedin, Instagram, Twitter, Github, CheckCircle2 } from 'lucide-react'
import { profile, works } from '../data/works'
import WorkCard from '../components/WorkCard'
import styles from './Home.module.css'
import { FaBehance } from "react-icons/fa";

const BehanceIcon = () => (
  <FaBehance />
)

const iconMap = { linkedin: Linkedin, instagram: Instagram, twitter: Twitter, github: Github, behance: BehanceIcon }

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible) }),
      { threshold: 0.12 }
    )
    document.querySelectorAll(`.${styles.fadeIn}`).forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.page}>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className={styles.hero}>

        {/* Giant BG name */}
        <div className={styles.heroBgName} aria-hidden="true">
          {profile.name.toUpperCase()}
        </div>

        {/* Grain overlay */}
        <div className={styles.heroGrain} aria-hidden="true" />

        {/* 3-column stage */}
        <div className={styles.heroStage}>

          {/* LEFT */}
          <div className={styles.heroLeft}>
            {profile.available && (
              <div className={styles.badge}>
                <span className={styles.dot} />
                Open to work
              </div>
            )}
            <p className={styles.heroGreet}>Hi, I'm</p>
            <h1 className={styles.heroName}>
              {profile.name.split(' ').map((w, i) => (
                <span key={i} style={{ animationDelay: `${0.1 + i * 0.15}s` }}>{w}</span>
              ))}
            </h1>
            <div className={styles.roleTag}>{profile.role}</div>
            <div className={styles.heroLocation}>
              <MapPin size={12} strokeWidth={2.5} /> {profile.location}
            </div>
            <div className={styles.heroSocials}>
              {Object.entries(profile.socials).map(([key, url]) => {
                const Icon = iconMap[key]
                return Icon ? (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                    className={styles.socialIcon} aria-label={key}>
                    <Icon size={15} />
                  </a>
                ) : null
              })}
            </div>
          </div>

          {/* CENTER */}
          <div className={styles.heroCenterCol}>
            <div className={styles.photoOuter}>
              <svg className={styles.photoArcSvg} viewBox="0 0 320 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="160" cy="220" rx="155" ry="215" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="5 9" opacity="0.45" />
                <ellipse cx="160" cy="220" rx="136" ry="196" stroke="var(--border)" strokeWidth="1" opacity="0.7" />
              </svg>
              <div className={styles.photoFrame}>
                {profile.avatar ? (
                  <img src={profile.avatar} alt={profile.name} className={styles.photoImg} />
                ) : (
                  <div className={styles.photoPlaceholder}>
                    <span>📷</span>
                    <small>Taruh foto di <code>/public/avatar.jpg</code><br />dan isi <code>avatar: "/avatar.jpg"</code> di works.js</small>
                  </div>
                )}
              </div>
              {/* Floating name card */}
              <div className={styles.floatCard}>
                <div className={styles.floatCardDot} />
                <div>
                  <p className={styles.floatCardTitle}>BA & PM</p>
                  <p className={styles.floatCardSub}>Jakarta, ID</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.heroRight}>
            <p className={styles.heroTagline}>{profile.tagline}</p>
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span className={styles.statNum}>{works.length}+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>{new Set(profile.experiences.map(exp => exp.company)).size}</span>
                <span className={styles.statLabel}>Companies</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNum}>{new Date().getFullYear() - 2019}+</span>
                <span className={styles.statLabel}>Yrs Exp</span>
              </div>
            </div>
            <div className={styles.heroCTAs}>
              <Link to="/works" className={styles.btnPrimary}>
                See Works <ArrowRight size={15} />
              </Link>
              <a href="#contact" className={styles.btnSecondary}>Let's Talk</a>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className={styles.marqueeBar}>
          <div className={styles.marqueeTrack}>
            {Array(8).fill(null).map((_, i) => (
              <span key={i} className={styles.marqueeItem}>
                Business Analysis <span className={styles.marqueeStar}>✦</span>&nbsp;
                Project Management <span className={styles.marqueeStar}>✦</span>&nbsp;
                Strategy <span className={styles.marqueeStar}>✦</span>&nbsp;
                Data & Reporting <span className={styles.marqueeStar}>✦</span>&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ ABOUT */}
      <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
        <div className={styles.container}>
          <div className={`${styles.fadeIn} ${styles.sectionLabel}`}>About Me</div>
          <div className={styles.aboutGrid}>
            <div className={`${styles.fadeIn} ${styles.aboutLeft}`}>
              <h2 className={styles.sectionTitle}>I turn business complexity into <em>clear strategy</em></h2>
              <p className={styles.aboutBio}>{profile.bio}</p>
            </div>
            <div className={`${styles.fadeIn} ${styles.skillsPanel}`}>
              <p className={styles.skillsHead}>Core Competencies</p>
              <div className={styles.skillsList}>
                {profile.skills.map(group => (
                  <div key={group.category} className={styles.skillGroup}>
                    <p className={styles.skillGroupLabel}>{group.category}</p>
                    <div className={styles.skillGroupItems}>
                      {group.items.map(s => (
                        <span key={s} className={styles.skill}>
                          <CheckCircle2 size={13} /> {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ EXPERIENCE */}
      <section className={`${styles.section} ${styles.expSection}`}>
        <div className={styles.container}>
          <div className={`${styles.fadeIn} ${styles.sectionLabel}`}>Experience</div>
          <h2 className={`${styles.fadeIn} ${styles.sectionTitle}`}>Where I've worked</h2>
          <div className={styles.timeline}>
            {profile.experiences.map((exp, i) => (
              <div key={i} className={`${styles.fadeIn} ${styles.timelineItem}`}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelineCompany}>{exp.company}</span>
                    <span className={styles.timelinePeriod}>{exp.period}</span>
                  </div>
                  <p className={styles.timelineRole}>{exp.role}</p>
                  <p className={styles.timelineDesc}>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {profile.education.length > 0 && (
            <>
              <div className={`${styles.fadeIn} ${styles.sectionLabel}`} style={{ marginTop: 56 }}>Education</div>
              <div className={styles.timeline}>
                {profile.education.map((edu, i) => (
                  <div key={i} className={`${styles.fadeIn} ${styles.timelineItem}`}>
                    <div className={styles.timelineDot} style={{ background: 'var(--green)' }} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineMeta}>
                        <span className={styles.timelineCompany}>{edu.school}</span>
                        <span className={styles.timelinePeriod}>{edu.period}</span>
                      </div>
                      <p className={styles.timelineRole}>{edu.degree}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════ WORKS */}
      <section className={`${styles.section} ${styles.worksSection}`}>
        <div className={styles.container}>
          <div className={styles.workHeader}>
            <div>
              <div className={`${styles.fadeIn} ${styles.sectionLabel}`}>Portfolio</div>
              <h2 className={`${styles.fadeIn} ${styles.sectionTitle}`}>Selected Works</h2>
            </div>
            <Link to="/works" className={`${styles.fadeIn} ${styles.viewAll}`}>
              View All <ArrowRight size={15} />
            </Link>
          </div>
          <div className={styles.worksGrid}>
            {works.slice(0, 3).map(w => (
              <div key={w.id} className={styles.fadeIn}><WorkCard work={w} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ CONTACT */}
      <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
        <div className={styles.container}>
          <div className={`${styles.fadeIn} ${styles.contactBox}`}>
            <div className={`${styles.fadeIn} ${styles.sectionLabel}`}>Contact</div>
            <h2 className={`${styles.fadeIn} ${styles.contactTitle}`}>Let's build something that actually moves the business</h2>
            <p className={`${styles.fadeIn} ${styles.contactSub}`}>
              I'm interested in roles and projects focused on solving real operational challenges — from data systems to process optimization and execution.
            </p>
            <a href={`mailto:${profile.email}`} className={`${styles.fadeIn} ${styles.emailBtn}`}>
              <Mail size={18} /> {profile.email}
            </a>
            <div className={`${styles.fadeIn} ${styles.socialRow}`}>
              {Object.entries(profile.socials).map(([key, url]) => {
                const Icon = iconMap[key]
                return Icon ? (
                  <a key={key} href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <Icon size={20} /><span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  </a>
                ) : null
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}