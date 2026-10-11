import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, Globe, Smartphone, Server } from 'lucide-react'

export default function ResponsiveWebsites() {
  return (
    <article className="page-container" style={{ paddingBottom: '7rem' }}>
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/projects">Work</Link>
          <span>/</span>
          <span style={{ color: 'var(--text)' }}>Responsive Websites</span>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: '3.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1rem' }}>
            <span className="tag">FRONTEND</span>
            <span className="tag">REACT / WORDPRESS</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1.25rem'
          }}>
            Responsive Websites Showcase
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '750px',
            lineHeight: 1.6
          }}>
            A collective showcase of responsive web development, UI/UX prototyping in Figma, WordPress customization, and production hosting executed across client engagements.
          </p>
        </header>

        {/* Project Meta Details Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2rem',
          padding: '1.5rem 0 2.5rem',
          borderBottom: '1px solid var(--border)',
          marginBottom: '4rem'
        }}>
          <div>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>DOMAINS</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>UI/UX, Frontend & CMS</div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>ORGANIZATIONS</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Ryzenforge & Internpe</div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>TECHNOLOGIES</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>React, HTML, CSS, JS, Figma, WP</div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>EXPERIENCE</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--accent)' }}>Internship Client Projects</div>
          </div>
        </div>

        {/* Visual Showcase Frame */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{
            background: '#0F172A',
            border: '1px solid #1E293B',
            padding: '3rem 2rem',
            borderRadius: '2px',
            minHeight: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#F8FAFC'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem',
              width: '100%',
              maxWidth: '800px',
              marginBottom: '2rem'
            }}>
              <div style={{ background: '#1E293B', padding: '1.5rem', border: '1px solid #334155', borderRadius: '4px' }}>
                <Layers size={22} color="var(--accent)" style={{ marginBottom: '0.75rem' }} />
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.35rem' }}>1. Figma Prototyping</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>High-fidelity wireframes, interactive flows, typography & component design.</div>
              </div>

              <div style={{ background: '#1E293B', padding: '1.5rem', border: '1px solid #334155', borderRadius: '4px' }}>
                <Smartphone size={22} color="var(--accent)" style={{ marginBottom: '0.75rem' }} />
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.35rem' }}>2. Responsive Code</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Mobile-first CSS, modern React components, cross-browser compatibility.</div>
              </div>

              <div style={{ background: '#1E293B', padding: '1.5rem', border: '1px solid #334155', borderRadius: '4px' }}>
                <Server size={22} color="var(--accent)" style={{ marginBottom: '0.75rem' }} />
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.35rem' }}>3. CMS & Deployment</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>WordPress customization, plugin architecture, production domain hosting.</div>
              </div>
            </div>

            <div className="mono" style={{ fontSize: '0.68rem', color: '#94A3B8', background: '#1E293B', padding: '0.35rem 0.85rem', border: '1px solid #334155' }}>
              HONEST SHOWCASE: INDIVIDUAL CLIENT SITES CAN BE DETAILED HERE WITH AUTHORIZED URLS & IMAGERY
            </div>
          </div>
        </div>

        {/* Editorial Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.8fr)',
          gap: '4rem',
          marginBottom: '5rem'
        }} className="project-editorial-grid">
          
          {/* Left Column: Scope Overview */}
          <div>
            <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>KEY PILLARS</div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>Fluid CSS & Grid layouts</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>Figma to code fidelity</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>Cross-device QA testing</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>WordPress CMS config</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>AUTHENTIC NOTE</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Per professional guidelines, client names and confidential assets are omitted unless explicitly released for public demonstration.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                1. Context & Scope
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Across my tenures as an Associate Web Developer Intern at Ryzenforge Enterprises and Web Development Intern at Internpe, I worked across the full lifecycle of delivering real-world websites.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Rather than treating web development as isolated coding exercises, these experiences required translating business needs into visual mockups, implementing clean responsive code, communicating directly with clients, and executing production deployments.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                2. UI/UX Design & Prototyping in Figma
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Before any markup was written, layouts were conceived in Figma. I developed:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-muted)', lineHeight: 1.6, paddingLeft: '1.25rem', listStyle: 'disc' }}>
                <li>Low-fidelity structural wireframes to map information hierarchy and user navigation paths.</li>
                <li>High-fidelity mockups with typography, color palettes, spacing systems, and interactive state definitions.</li>
                <li>Component libraries that could be translated systematically into modular HTML/CSS and React components.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                3. Responsive Development & WordPress Customization
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Implementation was adapted based on client infrastructure and project requirements:
              </p>
              <div style={{ border: '1px solid var(--border)', background: 'var(--bg-secondary)', padding: '1.5rem', marginTop: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.65 }}>
                  • <strong>Custom Frontend:</strong> Clean HTML5, CSS3, modern JavaScript, and React.js for bespoke dynamic user interfaces.<br />
                  • <strong>WordPress CMS:</strong> Modifying existing themes, setting up plugins, configuring page builders, and tailoring content models so non-technical stakeholders could edit their content.<br />
                  • <strong>Hosting & Deployment:</strong> Handling production domain setups, cPanel hosting, file transfers, and verifying live site uptime.
                </p>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                4. Client Communication & Coordination
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Beyond pure engineering, I participated actively in client check-ins at Ryzenforge, documenting feedback, tracking iterations in task boards, and explaining technical limitations in clear, approachable language.
              </p>
            </section>

          </div>

        </div>

        {/* Project Navigation Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--border)',
          paddingTop: '2.5rem',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <Link to="/projects/canteen-ease" className="btn btn-outline">
            <ArrowLeft size={16} />
            <span>Previous: Canteen Ease</span>
          </Link>

          <Link to="/projects/api-validation" className="btn btn-primary">
            <span>Next: API Validation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </article>
  )
}
