import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react'
import { LinkedinIcon } from '../components/Icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('yadums2003@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="page-container" style={{ paddingBottom: '7rem' }}>
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        {/* Breadcrumb */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--text)' }}>Contact</span>
        </nav>

        {/* Page Header */}
        <header style={{ marginBottom: '4rem', borderBottom: '1px solid var(--border)', paddingBottom: '2.5rem' }}>
          <div className="section-label">GET IN TOUCH</div>
          <h1 style={{
            fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.08,
            marginBottom: '1.25rem'
          }}>
            Let's Talk.
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '680px',
            lineHeight: 1.65
          }}>
            I am currently open to junior software engineering, web development, software QA, and technical roles. Feel free to reach out directly via email, phone, or LinkedIn.
          </p>
        </header>

        {/* Contact Details Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4.5rem'
        }}>
          {/* Email Card */}
          <div style={{
            border: '1px solid var(--border)',
            background: '#fff',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Mail size={18} color="var(--accent)" />
                <span className="mono" style={{ color: 'var(--text-muted)' }}>PRIMARY EMAIL</span>
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, wordBreak: 'break-all' }}>
                yadums2003@gmail.com
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Best way to reach me for job inquiries, project proposals, or collaboration.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="mailto:yadums2003@gmail.com" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                <span>Send Email</span>
                <ArrowUpRight size={15} />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="btn btn-outline"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check size={16} color="green" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div style={{
            border: '1px solid var(--border)',
            background: '#fff',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Phone size={18} color="var(--accent)" />
                <span className="mono" style={{ color: 'var(--text-muted)' }}>PHONE / WHATSAPP</span>
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>
                +91 9778207311
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Available for phone discussions and interviews during standard business hours (IST).
              </p>
            </div>

            <a href="tel:+919778207311" className="btn btn-outline" style={{ justifyContent: 'center' }}>
              <span>Call Now</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div style={{
            border: '1px solid var(--border)',
            background: '#fff',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <LinkedinIcon size={18} color="var(--accent)" />
                <span className="mono" style={{ color: 'var(--text-muted)' }}>LINKEDIN</span>
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, wordBreak: 'break-all' }}>
                Yadu Krishna M. S.
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Connect with me on LinkedIn for professional networking and career updates.
              </p>
            </div>

            <a
              href="https://linkedin.com/in/yadu-krishna-m-s-849b92314/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ justifyContent: 'center' }}
            >
              <span>View Profile</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Location Card */}
          <div style={{
            border: '1px solid var(--border)',
            background: '#fff',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <MapPin size={18} color="var(--accent)" />
                <span className="mono" style={{ color: 'var(--text-muted)' }}>LOCATION</span>
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700 }}>
                Kozhikode, Kerala, India
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Open to on-site opportunities in Kerala / South India, hybrid arrangements, or remote work globally.
              </p>
            </div>

            <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', padding: '0.5rem 0' }}>
              TIMEZONE: IST (UTC+5:30)
            </div>
          </div>
        </div>

        {/* Direct Email Composition Box */}
        <div style={{
          border: '1px solid var(--border)',
          background: 'var(--bg-secondary)',
          padding: '3rem 2.5rem',
          maxWidth: '780px'
        }}>
          <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            DIRECT EMAIL COMPOSITION
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            Quick Email Starter
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            Clicking the button below will open your native email client with pre-addressed recipient details and subject line, ensuring reliable communication without third-party form intermediaries.
          </p>

          <a
            href="mailto:yadums2003@gmail.com?subject=Opportunity%20Inquiry%20%E2%80%94%20Yadu%20Krishna%20Portfolio&body=Hi%20Yadu,%0A%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss..."
            className="btn btn-primary"
          >
            <Mail size={16} />
            <span>Compose Email to yadums2003@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}
