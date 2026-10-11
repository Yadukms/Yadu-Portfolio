import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { skills } from '../data/skills'

export default function Skills() {
  const skillCategories = [
    {
      key: 'programming',
      category: 'Programming Languages',
      context: 'Applied in algorithmic problem solving, simulation exercises, and backend logic scripting.',
      items: ['Python', 'C', 'JavaScript'],
    },
    {
      key: 'web',
      category: 'Frontend & Backend Development',
      context: 'Utilized across responsive web builds, MERN stack integration, component development, and custom WordPress deployments.',
      items: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'Express.js', 'Bootstrap', 'PHP'],
    },
    {
      key: 'databases',
      category: 'Databases & Data Handling',
      context: 'Relational data modeling for Canteen Ease and document data operations within MERN stack applications.',
      items: ['MongoDB', 'MySQL'],
    },
    {
      key: 'testing',
      category: 'Software Testing & QA',
      context: 'Hands-on manual testing, HTTP endpoint validation with Postman, creating structured test cases, and issue management in Jira.',
      items: ['Manual Testing', 'Test Case Design', 'Bug Tracking', 'Postman', 'Jira'],
    },
    {
      key: 'design',
      category: 'Design & Prototyping Tools',
      context: 'Creating low-fidelity wireframes, UI design layouts, client mockups, and responsive component libraries at Ryzenforge.',
      items: ['Figma', 'UI/UX Design'],
    },
    {
      key: 'productivity',
      category: 'Productivity & Project Coordination',
      context: 'Version control workflows with Git/GitHub, client update tracking, spreadsheet organization with MS Excel, and technical troubleshooting.',
      items: ['Git & GitHub', 'MS Excel', 'Project Coordination', 'Technical Troubleshooting'],
    },
  ]

  return (
    <div className="page-container" style={{ paddingBottom: '7rem' }}>
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        {/* Breadcrumb */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--text)' }}>Skills</span>
        </nav>

        {/* Page Header */}
        <header style={{ marginBottom: '4rem', borderBottom: '1px solid var(--border)', paddingBottom: '2.5rem' }}>
          <div className="section-label">TECHNICAL COMPETENCY</div>
          <h1 style={{
            fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.08,
            marginBottom: '1.25rem'
          }}>
            Skills & Tools.
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '720px',
            lineHeight: 1.65
          }}>
            An honest breakdown of the programming languages, web stacks, quality assurance tools, and collaboration workflows I use in practice — without inflated rating scales.
          </p>
        </header>

        {/* Category Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {skillCategories.map((group) => (
            <div
              key={group.key}
              style={{
                border: '1px solid var(--border)',
                background: '#fff',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem'
              }}
            >
              <div>
                <div className="mono" style={{ color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  CATEGORY
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.01em', marginBottom: '0.75rem' }}>
                  {group.category}
                </h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {group.context}
                </p>
              </div>

              <div>
                <div className="mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                  CORE TOOLS
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: '0.4rem 0.75rem',
                        background: 'var(--bg)',
                        border: '1px solid var(--border)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: 'var(--text)'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Strip */}
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
              Want to see these skills in applied projects?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Check out the featured web apps and QA test runs.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
