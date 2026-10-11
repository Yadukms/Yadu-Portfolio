import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <div className="page-container" style={{ paddingBottom: '7rem' }}>
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        {/* Breadcrumb */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--text)' }}>Experience</span>
        </nav>

        {/* Page Header */}
        <header style={{ marginBottom: '4rem', borderBottom: '1px solid var(--border)', paddingBottom: '2.5rem' }}>
          <div className="section-label">CAREER & INTERNSHIPS</div>
          <h1 style={{
            fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.08,
            marginBottom: '1.25rem'
          }}>
            Work Experience.
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '720px',
            lineHeight: 1.65
          }}>
            A chronological record of internships and engineering roles spanning frontend development, software quality assurance, UI/UX design, and embedded AI.
          </p>
        </header>

        {/* Experience List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', marginBottom: '5rem' }}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              style={{
                border: '1px solid var(--border)',
                background: '#fff',
                padding: '2.5rem',
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
                gap: '3rem',
                position: 'relative'
              }}
              className="experience-card"
            >
              {/* Left Column: Organization & Metadata */}
              <div>
                <div className="mono" style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  EXPERIENCE {exp.number}
                </div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '0.4rem' }}>
                  {exp.company}
                </h2>
                <div style={{ fontSize: '1rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '1.25rem' }}>
                  {exp.role}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={14} color="var(--text)" />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={14} color="var(--text)" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div>
                  <div className="mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                    TECHNOLOGIES
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.technologies.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Responsibilities */}
              <div>
                <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  KEY RESPONSIBILITIES & CONTRIBUTIONS
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      <CheckCircle2 size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Bottom Action Strip */}
        <div style={{
          padding: '2.5rem',
          border: '1px solid var(--border)',
          background: 'var(--bg-secondary)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.25rem' }}>
              Want a comprehensive single-page summary?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Download or view my verified resume in PDF format.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/resume" className="btn btn-primary">
              <span>View Resume (PDF)</span>
              <ArrowUpRight size={15} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <span>Contact Me</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .experience-card {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  )
}
