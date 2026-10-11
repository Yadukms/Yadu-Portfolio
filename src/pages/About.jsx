import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, GraduationCap, Award, Users, Globe2, BookOpen } from 'lucide-react'

export default function About() {
  return (
    <div className="page-container" style={{ paddingBottom: '7rem' }}>
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        {/* Breadcrumb */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--text)' }}>About</span>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: '3.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '2.5rem' }}>
          <div className="section-label">BACKGROUND & PROFILE</div>
          <h1 style={{
            fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.08,
            marginBottom: '1.25rem'
          }}>
            Yadu Krishna M. S.
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '720px',
            lineHeight: 1.65
          }}>
            Computer Science Engineering graduate based in Kozhikode, Kerala. Passionate about building functional web solutions, ensuring software reliability, and connecting teams to goals.
          </p>
        </header>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1fr)',
          gap: '4.5rem',
          marginBottom: '5rem'
        }} className="about-main-grid">

          {/* Left Column: Biography & Focus */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            
            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                Professional Introduction
              </h2>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.2rem' }}>
                I am a detail-oriented Computer Science graduate with hands-on experience spanning web development, software quality assurance, and project coordination. My approach centers on pragmatic engineering: writing clean, maintainable code, actively validating behavior through rigorous testing, and keeping communication transparent.
              </p>
              <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
                Having worked across four internship roles in agile development, client prototyping, and API testing, I understand the importance of delivering software that is not just visually appealing, but robust, verified, and accessible.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                Areas of Focus
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--text)' }}>
                    Web Development
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    Building responsive, fast, and accessible user interfaces using modern HTML, CSS, JavaScript, and React.js.
                  </p>
                </div>

                <div style={{ padding: '1.5rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--text)' }}>
                    QA & Manual Testing
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    Creating structured test cases, validating REST APIs with Postman, tracking issues in Jira, and catching edge cases.
                  </p>
                </div>

                <div style={{ padding: '1.5rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--text)' }}>
                    UI/UX Design
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    Designing wireframes, high-fidelity prototypes, and design systems in Figma before translating them to code.
                  </p>
                </div>

                <div style={{ padding: '1.5rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--text)' }}>
                    Coordination & Delivery
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    Tracking task timelines, communicating progress clearly with team members and clients, and managing deployments.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                Soft Skills & Strengths
              </h2>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {[
                  'Clear Communication',
                  'Cross-functional Teamwork',
                  'Methodical Problem Solving',
                  'Critical Thinking',
                  'Adaptability',
                  'Attention to Detail',
                ].map((strength) => (
                  <span key={strength} style={{
                    padding: '0.5rem 1rem',
                    background: '#fff',
                    border: '1px solid var(--border)',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                  }}>
                    {strength}
                  </span>
                ))}
              </div>
            </section>

            {/* Quick Links */}
            <div style={{ display: 'flex', gap: '1.25rem', paddingTop: '1rem' }}>
              <Link to="/experience" className="btn btn-primary">
                <span>View My Experience</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <span>Get in Touch</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>

          </div>

          {/* Right Column: Education, Certifications, Languages, Leadership */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Education Box */}
            <div style={{ border: '1px solid var(--border)', padding: '2rem', background: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <GraduationCap size={20} color="var(--accent)" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>Education</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>B.Tech in Computer Science</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Adi Shankara Institute of Engineering and Technology, Kalady
                  </div>
                  <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>
                    2021 – 2025
                  </div>
                </div>

                <div style={{ borderTop: '1px dashed var(--border)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Higher Secondary (Class XII)</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Score: 93%</div>
                  <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>
                    Completed 2021
                  </div>
                </div>

                <div style={{ borderTop: '1px dashed var(--border)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Secondary School (Class X)</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Score: 94%</div>
                  <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>
                    Completed 2019
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Box */}
            <div style={{ border: '1px solid var(--border)', padding: '2rem', background: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Award size={20} color="var(--accent)" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>Certifications</h3>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
                <li style={{ paddingBottom: '0.75rem', borderBottom: '1px dashed var(--border)' }}>
                  <div style={{ fontWeight: 600 }}>Infosys Springboard</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    Introduction to AI, NLP, Deep Learning, Data Science, and RPA
                  </div>
                </li>
                <li style={{ paddingBottom: '0.75rem', borderBottom: '1px dashed var(--border)' }}>
                  <div style={{ fontWeight: 600 }}>Techmindz</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    MERN Stack Internship Completion Certificate
                  </div>
                </li>
                <li>
                  <div style={{ fontWeight: 600 }}>Artificial Intelligence Workshop</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    Hands-on AI concepts & automation
                  </div>
                </li>
              </ul>
            </div>

            {/* Leadership & Languages */}
            <div style={{ border: '1px solid var(--border)', padding: '2rem', background: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Users size={20} color="var(--accent)" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>Leadership</h3>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text)', marginBottom: '1.5rem' }}>
                <strong>Core Coordinator</strong> — College Fest<br />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Led event management logistics, volunteer coordination, and schedule alignment.
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', borderTop: '1px dashed var(--border)', paddingTop: '1.25rem' }}>
                <Globe2 size={18} color="var(--accent)" />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Languages</h4>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <span className="mono" style={{ background: 'var(--bg)', padding: '3px 8px', border: '1px solid var(--border)', fontSize: '0.72rem' }}>
                  English (Fluent)
                </span>
                <span className="mono" style={{ background: 'var(--bg)', padding: '3px 8px', border: '1px solid var(--border)', fontSize: '0.72rem' }}>
                  Malayalam (Native)
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-main-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  )
}
