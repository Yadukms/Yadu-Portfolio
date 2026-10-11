import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, GraduationCap, Briefcase, Cpu, Zap } from 'lucide-react'
import Hero from '../components/Hero'
import CapabilityStrip from '../components/CapabilityStrip'
import ProjectRow from '../components/ProjectRow'
import ExperienceTimeline from '../components/ExperienceTimeline'
import SkillsGrid from '../components/SkillsGrid'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Capability Strip */}
      <CapabilityStrip />

      {/* 3. Featured Projects */}
      <section id="featured-work" style={{ padding: '6rem 0 5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-label">FEATURED WORK</div>
          <div className="section-header-row">
            <h2 className="section-title">
              A few things I've helped<br />bring to life.
            </h2>
            <Link to="/projects" className="view-all">
              <span>View all projects</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="project-rows-list">
            {projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Preview */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-label">ABOUT ME</div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) 280px minmax(0, 1fr)',
            gap: '3rem',
            alignItems: 'start'
          }} className="about-preview-grid">
            
            {/* Bio & CTA */}
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
                color: 'var(--text)'
              }}>
                Computer Science<br />Graduate from Kozhikode.
              </h2>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: '2rem'
              }}>
                Motivated and detail-oriented Computer Science graduate with experience in web development, software testing, and networking. Experienced in building responsive front-end applications, executing manual test cases, troubleshooting technical issues, and coordinating with clients and teams. Skilled in the MERN stack, Python, C, and testing tools including Jira and Postman.
              </p>
              <Link to="/about" className="btn btn-primary">
                <span>More about me</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>

            {/* Workspace Aesthetic Visual Frame matching reference */}
            <div style={{
              background: '#EAE6DC',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
              position: 'relative'
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--text-muted)',
                borderBottom: '1px dashed var(--border)',
                paddingBottom: '0.5rem',
                letterSpacing: '0.08em'
              }}>
                DEV ENVIRONMENT // SETUP
              </div>

              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--text)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.5rem'
                }}>
                  Good Code<br />
                  <span style={{ color: 'var(--accent)' }}>Better Opportunities</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  React • Node • Testing
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.62rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-light)',
                borderTop: '1px dashed var(--border)',
                paddingTop: '0.5rem'
              }}>
                <span>STATUS: ACTIVE</span>
                <span>KOZHIKODE, IN</span>
              </div>
            </div>

            {/* Highlights List matching reference column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', paddingLeft: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.4rem', border: '1px solid var(--border)', color: 'var(--accent)' }}>
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.15rem' }}>B.Tech</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Computer Science</div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)' }}>2021 – 2025</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.4rem', border: '1px solid var(--border)', color: 'var(--accent)' }}>
                  <Briefcase size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.15rem' }}>4 Internships</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Development • Testing • AI</div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)' }}>Ryzenforge, Techmindz, Internpe, STEM</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.4rem', border: '1px solid var(--border)', color: 'var(--accent)' }}>
                  <Cpu size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.15rem' }}>Core Stack</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Web • Testing • Tools</div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)' }}>React, Node, Postman, MySQL, Jira</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.4rem', border: '1px solid var(--border)', color: 'var(--accent)' }}>
                  <Zap size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.15rem' }}>Always</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Learning & Refining</div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-light)' }}>Exploring new technologies</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @media (max-width: 960px) {
            .about-preview-grid {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
          }
        `}</style>
      </section>

      {/* 5. Experience Timeline */}
      <section style={{ padding: '6rem 0 5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-label">EXPERIENCE</div>
          <div className="section-header-row" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title">Where I've contributed.</h2>
            <Link to="/experience" className="view-all">
              <span>View full experience</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* 6. Skills Section */}
      <section style={{ padding: '6rem 0 7rem' }}>
        <div className="container">
          <div className="section-label">SKILLS & TOOLS</div>
          <div className="section-header-row" style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title">Technical capabilities.</h2>
            <Link to="/skills" className="view-all">
              <span>View all skills</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <SkillsGrid />
        </div>
      </section>
    </div>
  )
}
