import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, Terminal, AlertCircle } from 'lucide-react'
import { projects } from '../data/projects'

export default function ApiValidation() {
  const apiProject = projects.find((p) => p.id === 'api-validation')

  return (
    <article className="page-container" style={{ paddingBottom: '7rem' }}>
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/projects">Work</Link>
          <span>/</span>
          <span style={{ color: 'var(--text)' }}>API Validation</span>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: '3.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1rem' }}>
            <span className="tag">QA & TESTING</span>
            <span className="tag">POSTMAN / REST</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '1.25rem'
          }}>
            Manual REST API Validation
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '750px',
            lineHeight: 1.6
          }}>
            Rigorous manual endpoint validation, status code verification, and error handling inspection conducted using Postman for MERN stack applications.
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
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>QA & API Tester</div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>ORGANIZATION</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Techmindz</div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>TOOLS USED</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Postman, REST APIs, JSON</div>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>FOCUS</div>
            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--accent)' }}>Manual QA & Defect Logging</div>
          </div>
        </div>

        {/* Postman Visual UI Replica Frame */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{
            background: '#1C1E24',
            border: '1px solid #2D3748',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }}>
            {/* Window bar */}
            <div style={{
              background: '#14161B',
              padding: '0.75rem 1.25rem',
              borderBottom: '1px solid #2D3748',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                <span style={{ marginLeft: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#A0AEC0' }}>
                  Postman Workspace // MERN Auth & CRUD Suite
                </span>
              </div>
              <span className="mono" style={{ fontSize: '0.65rem', color: '#48BB78', background: 'rgba(72,187,120,0.12)', padding: '2px 8px', borderRadius: '3px' }}>
                ENVIRONMENT: LOCALHOST:5000
              </span>
            </div>

            {/* Request Bar */}
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #2D3748', display: 'flex', gap: '0.75rem', alignItems: 'center', background: '#181A20' }}>
              <span style={{ background: '#2563EB', color: '#fff', padding: '4px 8px', borderRadius: '3px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700 }}>
                POST
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#E2E8F0', flex: 1 }}>
                http://localhost:5000/api/users/login
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#48BB78' }}>
                Status: 200 OK &nbsp;|&nbsp; Time: 34 ms
              </span>
            </div>

            {/* Response Preview */}
            <div style={{ padding: '1.25rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#E2E8F0', lineHeight: 1.6 }}>
              <span style={{ color: '#718096' }}>// Response Body JSON</span><br />
              &#123;<br />
              &nbsp;&nbsp;<span style={{ color: '#63B3ED' }}>"success"</span>: <span style={{ color: '#F6E05E' }}>true</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#63B3ED' }}>"message"</span>: <span style={{ color: '#9AE6B4' }}>"User authenticated successfully"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: '#63B3ED' }}>"token"</span>: <span style={{ color: '#9AE6B4' }}>"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."</span><br />
              &#125;
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
          
          {/* Left Column */}
          <div>
            <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>TEST METHODOLOGIES</div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>Positive / Happy path verification</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>Negative input boundary tests</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>HTTP status code validation</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle2 size={16} color="var(--accent)" />
                    <span>JWT Auth header tests</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>TRANSPARENCY NOTE</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Test cases below represent illustrative examples modeled strictly on the actual testing routines performed during internship development.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                1. Context & Testing Objectives
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                During my MERN Stack internship at Techmindz, establishing reliability for RESTful endpoints was critical before coupling them to React user interfaces. Incomplete backend error handling can result in silent failures, unhandled client exceptions, or compromised data integrity.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                The objective was to systematically validate every route against expected request headers, payloads, query parameters, and database states using Postman.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                2. Test Suite & Validation Cases (Illustrative Examples)
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                The table below details representative test cases created and executed to validate authentication and resource management endpoints:
              </p>

              {/* Responsive Table */}
              <div style={{ overflowX: 'auto', border: '1px solid var(--border)', background: '#fff' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
                      <th style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)' }}>METHOD</th>
                      <th style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)' }}>ENDPOINT</th>
                      <th style={{ padding: '0.75rem 1rem' }}>OBJECTIVE</th>
                      <th style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)' }}>EXPECTED</th>
                      <th style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)' }}>ACTUAL</th>
                      <th style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)' }}>RESULT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiProject?.testCases?.map((tc, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: tc.method === 'POST' ? 'var(--accent)' : '#059669' }}>
                          {tc.method}
                        </td>
                        <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                          {tc.endpoint}
                        </td>
                        <td style={{ padding: '0.75rem 1rem' }}>
                          {tc.objective}
                        </td>
                        <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                          {tc.expectedStatus}
                        </td>
                        <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                          {tc.actualStatus}
                        </td>
                        <td style={{ padding: '0.75rem 1rem' }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            background: '#DCFCE7',
                            color: '#15803D',
                            padding: '2px 8px',
                            borderRadius: '2px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            fontWeight: 600
                          }}>
                            {tc.result}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                3. Defects Identified & Resolution
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Through manual testing, multiple edge cases were caught prior to frontend integration:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-muted)', lineHeight: 1.6, paddingLeft: '1.25rem', listStyle: 'disc' }}>
                <li>Missing validation on email formats produced unhandled database crashes instead of returning clean 400 Bad Request responses.</li>
                <li>Protected routes failed to verify expired tokens consistently, returning generic 500 errors instead of explicit 401 Unauthorized codes.</li>
                <li>Inconsistent casing in request bodies resulted in silent empty document saves in MongoDB.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                4. Key Takeaways
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Manual API validation gave me a deep appreciation for the HTTP protocol and the importance of predictable API contracts. Ensuring consistent status codes and clear error messages saves hours of frontend debugging and ensures a far more resilient overall architecture.
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
          <Link to="/projects/responsive-websites" className="btn btn-outline">
            <ArrowLeft size={16} />
            <span>Previous: Responsive Websites</span>
          </Link>

          <Link to="/projects" className="btn btn-primary">
            <span>All Projects</span>
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
