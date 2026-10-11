import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="page-container" style={{ display: 'flex', alignItems: 'center', minHeight: '80vh', padding: '4rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="mono" style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '1rem' }}>
          404 — PAGE NOT FOUND
        </div>
        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          marginBottom: '1.5rem'
        }}>
          Page does not exist.
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-muted)',
          maxWidth: '480px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.6
        }}>
          The page you requested could not be found. Please check the URL or return to the homepage.
        </p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Back to Homepage</span>
        </Link>
      </div>
    </div>
  )
}
