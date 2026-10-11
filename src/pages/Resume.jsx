import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react'

export default function Resume() {
  const [fileExists, setFileExists] = useState(true)
  const resumeUrl = '/Resume_Yadu.pdf'

  useEffect(() => {
    // Check if the resume PDF is present and accessible
    fetch(resumeUrl, { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          // Fallback to /resume.pdf if needed
          return fetch('/resume.pdf', { method: 'HEAD' })
        }
        return res
      })
      .then((res) => {
        setFileExists(res && res.ok)
      })
      .catch(() => {
        setFileExists(false)
      })
  }, [])

  return (
    <div className="page-container" style={{ paddingBottom: '7rem' }}>
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        {/* Breadcrumb */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--text)' }}>Resume</span>
        </nav>

        {/* Page Header */}
        <header style={{ marginBottom: '3.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '2.5rem' }}>
          <div className="section-label">CURRICULUM VITAE</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h1 style={{
                fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                marginBottom: '1rem'
              }}>
                Resume.
              </h1>
              <p style={{
                fontSize: '1.15rem',
                color: 'var(--text-muted)',
                maxWidth: '650px',
                lineHeight: 1.6
              }}>
                Verified academic credentials, engineering internships, and technical competencies for Yadu Krishna M. S.
              </p>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={resumeUrl}
                download="Resume_Yadu.pdf"
                className="btn btn-primary"
                id="download-resume-btn"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="open-resume-new-tab"
              >
                <ExternalLink size={16} />
                <span>Open in New Tab</span>
              </a>
            </div>
          </div>
        </header>

        {/* Embedded PDF Viewer Frame */}
        <div style={{
          border: '1px solid var(--border)',
          background: '#fff',
          borderRadius: '2px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
        }}>
          <div style={{
            background: 'var(--bg-secondary)',
            padding: '0.75rem 1.5rem',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
              <FileText size={15} color="var(--accent)" />
              <span style={{ fontWeight: 600 }}>Resume_Yadu.pdf</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', color: '#16A34A', fontSize: '0.7rem', marginLeft: '0.5rem' }}>
                <CheckCircle2 size={13} /> Verified
              </span>
            </div>
            <span className="mono" style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
              PDF PREVIEW ENGINE
            </span>
          </div>

          <div style={{ width: '100%', minHeight: '800px', height: '85vh', position: 'relative' }}>
            <iframe
              src={resumeUrl}
              title="Yadu Krishna M. S. Resume"
              width="100%"
              height="100%"
              style={{ border: 'none', display: 'block' }}
            >
              {/* Graceful Fallback if browser does not support embedded PDF */}
              <div style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
              }}>
                <FileText size={48} color="var(--text-light)" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Unable to embed PDF directly in this browser</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '440px' }}>
                  Your browser does not support inline PDF viewing. You can download the file or open it in a separate tab instead.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={resumeUrl} download="Resume_Yadu.pdf" className="btn btn-primary">
                    <Download size={15} />
                    <span>Download PDF</span>
                  </a>
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <ExternalLink size={15} />
                    <span>Open in New Tab</span>
                  </a>
                </div>
              </div>
            </iframe>
          </div>
        </div>

      </div>
    </div>
  )
}
