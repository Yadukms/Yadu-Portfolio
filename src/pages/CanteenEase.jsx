import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function CanteenEase() {
  return (
    <article className="page-container" style={{ paddingBottom: '7rem' }}>
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/projects">Work</Link>
          <span>/</span>
          <span style={{ color: 'var(--text)' }}>Canteen Ease</span>
        </nav>

        {/* Header Header */}
        <header style={{ marginBottom: '3.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1rem' }}>
            <span className="tag">WEB APP</span>
            <span className="tag">PHP / MYSQL</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1.25rem'
          }}>
            Canteen Ease
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '750px',
            lineHeight: 1.6
          }}>
            A token-based food ordering system designed to streamline college canteen operations, eliminate congested queues, and improve order fulfillment.
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
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>ROLE</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Full Stack & Testing</div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>TIMELINE</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Academic Project</div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>TECHNOLOGIES</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>HTML, CSS, JS, PHP, MySQL</div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>STATUS</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--accent)' }}>Completed & Validated</div>
          </div>
        </div>

        {/* Visual Showcase / High Fidelity Placeholder */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{
            background: '#FDFBF7',
            border: '1px solid var(--border)',
            padding: '2.5rem',
            borderRadius: '2px',
            minHeight: '360px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.5rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: '#FFFFFF',
              border: '1px solid var(--border)',
              padding: '1.5rem 2rem',
              maxWidth: '520px',
              width: '100%',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Canteen Ease — Order Portal</span>
                <span className="mono" style={{ color: 'var(--accent)', fontSize: '0.68rem' }}>TOKEN #042</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', margin: '1.5rem 0' }}>
                <div style={{ padding: '0.75rem', background: '#F8F6F0', borderRadius: '4px', width: '45%' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Item Ordered</div>
                  <div style={{ fontWeight: 600, marginTop: '0.2rem' }}>Special Meals (x1)</div>
                </div>
                <div style={{ padding: '0.75rem', background: '#F8F6F0', borderRadius: '4px', width: '45%' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Status</div>
                  <div style={{ fontWeight: 600, color: '#16A34A', marginTop: '0.2rem' }}>Ready for Pickup</div>
                </div>
              </div>
              <div className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-light)' }}>
                PHP BACKEND SESSION VERIFIED • MYSQL TOKEN DISPATCHED
              </div>
            </div>

            <div className="mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)', background: 'var(--bg)', padding: '0.35rem 0.85rem', border: '1px solid var(--border)' }}>
              NOTE: REAL PROJECT SCREENSHOTS CAN BE SUPPLIED TO REPLACE THIS SCHEMATIC
            </div>
          </div>
        </div>

        {/* Content Editorial Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.8fr)',
          gap: '4rem',
          marginBottom: '5rem'
        }} className="project-editorial-grid">
          
          {/* Left Column: Quick Navigation / Key Highlights */}
          <div>
            <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>CORE DELIVERABLES</div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>Token generation algorithm</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>Order state management</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>Manual test case verification</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>Relational database design</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>AVAILABILITY</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Source code and full documentation are available upon request for technical review.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                1. Project Objective & Problem Addressed
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                During peak lunch hours, college canteens struggle with long physical queues, order confusion, and inaccurate stock estimations. Students frequently wasted valuable break time standing in line, while kitchen staff faced difficulty tracking which orders were pending, preparing, or fulfilled.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                The goal of Canteen Ease was to replace the chaos of manual counters with an automated token issuance and order status tracking system accessible from any browser.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                2. My Role & Technical Contributions
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                As the developer on this project, I handled both frontend construction, server-side development, and comprehensive quality assurance:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-muted)', lineHeight: 1.6, paddingLeft: '1.25rem', listStyle: 'disc' }}>
                <li>Built clean, responsive user interfaces using HTML5, CSS3, and JavaScript for menu browsing and cart management.</li>
                <li>Architected relational database tables in MySQL for users, menu items, token sequences, and order records.</li>
                <li>Implemented PHP backend handlers to calculate totals, generate unique token numbers, and update order statuses in real time.</li>
                <li>Executed manual test scenarios to ensure tokens did not duplicate during peak simulations and edge cases.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                3. Quality Assurance & Workflow Testing
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                In keeping with my focus on Software QA, the ordering workflow underwent rigorous manual test passes:
              </p>
              <div style={{ border: '1px solid var(--border)', background: 'var(--bg-secondary)', padding: '1.5rem', marginTop: '1rem' }}>
                <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>VALIDATED WORKFLOWS</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.6 }}>
                  • <strong>Token Sequence Integrity:</strong> Ensured tokens remained sequential and prevented duplicate numbers when multiple orders were dispatched consecutively.<br />
                  • <strong>Empty Cart & Boundary Validation:</strong> Verified proper error handling when submittals had zero items selected or invalid quantity inputs.<br />
                  • <strong>State Transitions:</strong> Tested transition states from <em>Pending</em> → <em>Preparing</em> → <em>Ready</em> → <em>Completed</em>.
                </p>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                4. Challenges & Key Learnings
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Structuring database transactions in MySQL to guarantee that token increments remained reliable even under rapid sequential requests taught me the value of atomicity and state validation. It also reinforced how critical intuitive, minimal UI feedback is for users under time constraints.
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
          <Link to="/projects" className="btn btn-outline">
            <ArrowLeft size={16} />
            <span>All Projects</span>
          </Link>

          <Link to="/projects/responsive-websites" className="btn btn-primary">
            <span>Next: Responsive Websites</span>
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
