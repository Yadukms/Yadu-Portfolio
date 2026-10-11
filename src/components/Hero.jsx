import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDownRight, ArrowUpRight, MapPin, Mail, Sparkles, Terminal, Activity } from 'lucide-react'
import { LinkedinIcon } from './Icons'

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false })
  const cardRef = useRef(null)

  const scrollToProjects = (e) => {
    e.preventDefault()
    const target = document.getElementById('featured-work')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Subtle tilt angle capped at ~8 degrees
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    setTilt({ x: rotateX, y: rotateY, active: true })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false })
  }

  return (
    <section className="hero-section" style={{ padding: '4.5rem 0 5.5rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background technical watermarks */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        right: '4rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: 'rgba(16, 16, 16, 0.08)',
        letterSpacing: '0.2em',
        pointerEvents: 'none',
        userSelect: 'none'
      }}>
        INDEX // 2026.01_YK
      </div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1.1fr)',
          gap: '4rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column */}
          <div className="hero-left">
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>
              OPEN TO OPPORTUNITIES
            </div>

            <h1 style={{
              fontSize: 'clamp(2.75rem, 5.5vw, 4.35rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              marginBottom: '1.75rem',
              color: 'var(--text)'
            }}>
              I make digital<br />
              things <span style={{ color: 'var(--accent)' }}>work better.</span>
            </h1>

            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              maxWidth: '540px',
              marginBottom: '2.25rem'
            }}>
              I'm <strong>Yadu Krishna</strong> — a Computer Science graduate who blends web development, software testing, and project coordination to build reliable and user-friendly digital solutions.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="#featured-work" onClick={scrollToProjects} className="btn btn-primary">
                <span>Explore my work</span>
                <ArrowDownRight size={16} />
              </a>
              <Link to="/resume" className="btn btn-outline">
                <span>View resume</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Compact contact metadata */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border)',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
                <MapPin size={13} style={{ color: 'var(--text)' }} />
                <span>Kozhikode, Kerala</span>
              </div>
              <a
                href="mailto:yadums2003@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}
              >
                <Mail size={13} style={{ color: 'var(--text)' }} />
                <span>yadums2003@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/yadu-krishna-m-s-849b92314/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}
              >
                <LinkedinIcon size={13} style={{ color: 'var(--text)' }} />
                <span>linkedin.com/in/yadu-krishna-m-s-849b92314/</span>
              </a>
            </div>
          </div>

          {/* Right Column: Creative Interactive Engineering Emblem */}
          <div className="hero-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                padding: '2.5rem 1.5rem',
                perspective: '1000px',
                cursor: 'crosshair'
              }}
            >
              {/* Outer Architectural Registration Guides */}
              <div style={{
                position: 'absolute',
                top: '0',
                right: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)'
              }}>
                <span style={{ width: '6px', height: '1px', background: 'var(--text-muted)' }} />
                <span>COMPUTER SCIENCE GRADUATE</span>
              </div>

              <div style={{
                position: 'absolute',
                bottom: '0.5rem',
                right: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)'
              }}>
                <span>11.2588° N, 75.7804° E</span>
                <span style={{ width: '6px', height: '1px', background: 'var(--text-muted)' }} />
                <span style={{ fontWeight: 600, color: 'var(--text)' }}>KOZHIKODE</span>
              </div>

              {/* Faint Architectural Underlay Card */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                left: '0.5rem',
                width: '64px',
                height: '64px',
                background: 'rgba(20, 85, 248, 0.08)',
                border: '1px dashed rgba(20, 85, 248, 0.25)',
                zIndex: 0
              }} />

              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '2.5rem',
                width: '48px',
                height: '48px',
                background: 'rgba(20, 85, 248, 0.06)',
                zIndex: 0
              }} />

              {/* 3D Tilting Core Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '0.94',
                  transform: tilt.active
                    ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`
                    : 'rotateX(0deg) rotateY(0deg) scale(1)',
                  transition: tilt.active ? 'transform 0.12s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  zIndex: 2
                }}
              >
                {/* Main Geometric Blue Polygon with chamfered top-left and notched bottom-left */}
                <div
                  className="hero-geometric-card"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(145deg, #185bfb 0%, #1048df 60%, #0d3ec2 100%)',
                    clipPath: 'polygon(26% 0%, 100% 0%, 100% 100%, 12% 100%, 12% 88%, 0% 88%, 0% 26%)',
                    boxShadow: '0 25px 50px -12px rgba(20, 85, 248, 0.45)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '2.25rem 2rem 2rem',
                    overflow: 'hidden',
                    animation: tilt.active ? 'none' : 'subtleFloat 7s ease-in-out infinite'
                  }}
                >
                  {/* Subtle Blueprint Grid Pattern */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
                      `,
                      backgroundSize: '24px 24px',
                      pointerEvents: 'none',
                      opacity: 0.8
                    }}
                  />

                  {/* Diagonal Sheen Effect on hover */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Card Header Strip: Technical Meta */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 2,
                    marginLeft: '26%' // Align with chamfer cut
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.14em',
                      color: 'rgba(255, 255, 255, 0.85)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 8px #4ade80' }} />
                      SYS.ACTIVE // 2026
                    </span>

                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.58rem',
                      letterSpacing: '0.1em',
                      color: 'rgba(255, 255, 255, 0.65)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      padding: '2px 6px'
                    }}>
                      B.TECH CSE
                    </span>
                  </div>

                  {/* Center Interactive Target Crosshair Visual */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2,
                    margin: 'auto 0'
                  }}>
                    <div style={{ position: 'relative', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      
                      {/* Rotating Outer Radar Dashes */}
                      <svg
                        width="90"
                        height="90"
                        viewBox="0 0 90 90"
                        style={{
                          position: 'absolute',
                          animation: 'radarSpin 18s linear infinite'
                        }}
                      >
                        <circle
                          cx="45"
                          cy="45"
                          r="38"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.3)"
                          strokeWidth="1.2"
                          strokeDasharray="4 6"
                        />
                        <circle
                          cx="45"
                          cy="45"
                          r="26"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.2)"
                          strokeWidth="1"
                        />
                      </svg>

                      {/* Primary Crosshair Symbol */}
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ position: 'relative', zIndex: 3 }}>
                        <line x1="24" y1="2" x2="24" y2="46" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="2" y1="24" x2="46" y2="24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="24" cy="24" r="3.5" fill="white" />
                      </svg>

                      {/* Glowing center pulse aura */}
                      <div style={{
                        position: 'absolute',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.35)',
                        filter: 'blur(8px)',
                        animation: 'pulseGlow 2.5s ease-in-out infinite'
                      }} />
                    </div>

                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.12em',
                      color: 'rgba(255, 255, 255, 0.75)',
                      marginTop: '0.6rem'
                    }}>
                      COORDINATES LOCKED
                    </div>
                  </div>

                  {/* Bottom Footer Label matching signature reference */}
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    borderTop: '1px solid rgba(255, 255, 255, 0.25)',
                    paddingTop: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.16em',
                      color: 'rgba(255, 255, 255, 0.95)',
                      fontWeight: 600
                    }}>
                      DESIGN &nbsp;/&nbsp; BUILD &nbsp;/&nbsp; TEST
                    </span>

                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      color: 'rgba(255, 255, 255, 0.65)'
                    }}>
                      v2.0
                    </span>
                  </div>

                </div>

                {/* Floating Architectural Technical Tags (Layered in 3D) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '-16px',
                    background: '#FFFFFF',
                    border: '1.5px solid var(--text)',
                    padding: '0.35rem 0.65rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--text)',
                    boxShadow: '4px 4px 0px rgba(16, 16, 16, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    zIndex: 4,
                    transform: tilt.active ? 'translateZ(20px)' : 'none',
                    transition: 'transform 0.2s ease-out'
                  }}
                >
                  <Terminal size={12} color="var(--accent)" />
                  <span>FULL STACK & QA</span>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '-12px',
                    right: '-14px',
                    background: '#101010',
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '0.35rem 0.65rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.08em',
                    color: '#F5F1E9',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    zIndex: 4,
                    transform: tilt.active ? 'translateZ(24px)' : 'none',
                    transition: 'transform 0.2s ease-out'
                  }}
                >
                  <Activity size={12} color="#4ade80" />
                  <span>API VALIDATION READY</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <style>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes radarSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.6); opacity: 0.8; }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .hero-right {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  )
}
