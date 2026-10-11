import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectRow from '../components/ProjectRow'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'

export default function Projects() {
  const [filter, setFilter] = useState('ALL')

  const filterMap = {
    'ALL': () => true,
    'DEVELOPMENT': (p) => p.category === 'Web App' || p.category === 'Frontend',
    'QA': (p) => p.category === 'QA',
    'UI/UX': (p) => p.tags.includes('WordPress') || p.tags.includes('Figma'),
  }

  const filteredProjects = projects.filter(filterMap[filter] || (() => true))

  return (
    <div className="page-container" style={{ paddingBottom: '7rem' }}>
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        {/* Breadcrumb */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--text)' }}>Work</span>
        </nav>

        {/* Page Header */}
        <div style={{ marginBottom: '3.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '2.5rem' }}>
          <div className="section-label">PORTFOLIO INDEX</div>
          <h1 style={{
            fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.08,
            marginBottom: '1.25rem'
          }}>
            Selected Work.
          </h1>
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            maxWidth: '680px',
            lineHeight: 1.65
          }}>
            A curated collection of web applications, client frontend systems, and software QA initiatives. Built with an emphasis on functional reliability and clean user experience.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <span className="mono" style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}>FILTER BY:</span>
          {['ALL', 'DEVELOPMENT', 'QA', 'UI/UX'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? 'var(--text)' : 'transparent',
                color: filter === cat ? 'var(--bg)' : 'var(--text)',
                border: '1px solid var(--border)',
                padding: '0.45rem 1rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                transition: 'all var(--transition)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Rows */}
        <div className="project-rows-list">
          {filteredProjects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>

        {/* Transparent Upcoming / Additional Projects Placeholder State */}
        <div style={{
          marginTop: '4rem',
          padding: '3rem 2rem',
          border: '1px dashed var(--border)',
          background: 'rgba(0,0,0,0.01)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem'
        }}>
          <FolderGit2 size={32} color="var(--text-light)" />
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              More projects in progress
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '480px', lineHeight: 1.6 }}>
              Additional client and exploratory projects will be added as case studies, repository links, and production screenshots are released.
            </p>
          </div>
          <a href="mailto:yadums2003@gmail.com" className="btn btn-outline" style={{ marginTop: '0.5rem' }}>
            <span>Inquire about specific work</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
