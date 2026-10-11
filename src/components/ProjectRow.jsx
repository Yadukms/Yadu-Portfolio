import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Tasteful CSS/SVG artwork renderers for the thumbnails
function CanteenEaseThumbnail() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#FDFBF7',
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: '1px solid rgba(0,0,0,0.06)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: '28px', height: '6px', background: 'var(--text)', borderRadius: '2px' }} />
        <div style={{ display: 'flex', gap: '4px' }}>
          <div style={{ width: '12px', height: '4px', background: '#ccc' }} />
          <div style={{ width: '12px', height: '4px', background: '#ccc' }} />
        </div>
      </div>
      <div>
        <div style={{ fontSize: '10px', fontWeight: 800, lineHeight: 1.1, color: '#1a1a1a', marginBottom: '4px' }}>
          Good Food<br /><span style={{ color: '#E05A47' }}>Shorter Waits</span>
        </div>
        <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FCE7D6', border: '1px solid #E89A72', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
            🍲
          </div>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#DEF7EC', border: '1px solid #7ED4AD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
            🥗
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '4px' }}>
        <span style={{ fontSize: '7px', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>TOKEN #042</span>
        <span style={{ fontSize: '6px', fontFamily: 'var(--font-mono)', background: '#E0F2FE', padding: '1px 4px', color: '#0369A1' }}>READY</span>
      </div>
    </div>
  )
}

function ResponsiveWebsitesThumbnail() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#0F172A',
      padding: '10px',
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Desktop frame */}
      <div style={{
        flex: 1.2,
        height: '85%',
        background: '#1E293B',
        borderRadius: '3px',
        padding: '5px',
        border: '1px solid #334155',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <div style={{ display: 'flex', gap: '3px' }}>
          <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#EF4444' }} />
          <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#F59E0B' }} />
          <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#10B981' }} />
        </div>
        <div style={{ height: '14px', background: 'var(--accent)', opacity: 0.9, borderRadius: '2px' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', flex: 1 }}>
          <div style={{ background: '#334155', borderRadius: '2px' }} />
          <div style={{ background: '#334155', borderRadius: '2px' }} />
        </div>
      </div>
      {/* Mobile frame */}
      <div style={{
        width: '36px',
        height: '80%',
        background: '#FFFFFF',
        borderRadius: '4px',
        padding: '4px 3px',
        border: '1px solid #64748B',
        display: 'flex',
        flexDirection: 'column',
        gap: '3px'
      }}>
        <div style={{ width: '12px', height: '2px', background: '#000', margin: '0 auto', borderRadius: '1px' }} />
        <div style={{ height: '8px', background: 'var(--accent)', borderRadius: '1px' }} />
        <div style={{ height: '6px', background: '#E2E8F0', borderRadius: '1px' }} />
        <div style={{ flex: 1, background: '#F1F5F9', borderRadius: '1px' }} />
      </div>
    </div>
  )
}

function ApiValidationThumbnail() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#1C1E24',
      padding: '10px',
      fontFamily: 'var(--font-mono)',
      fontSize: '7.5px',
      color: '#A0AEC0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: '1px solid #2D3748'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid #2D3748', paddingBottom: '5px' }}>
        <span style={{ color: '#48BB78', fontWeight: 700 }}>GET</span>
        <span style={{ color: '#E2E8F0' }}>/api/v1/auth/verify</span>
        <span style={{ marginLeft: 'auto', color: '#48BB78', background: 'rgba(72,187,120,0.15)', padding: '1px 3px' }}>200 OK</span>
      </div>
      <div style={{ color: '#718096', lineHeight: 1.3 }}>
        <span style={{ color: '#ED8936' }}>&#123;</span><br />
        &nbsp;&nbsp;<span style={{ color: '#63B3ED' }}>"status"</span>: <span style={{ color: '#9AE6B4' }}>"success"</span>,<br />
        &nbsp;&nbsp;<span style={{ color: '#63B3ED' }}>"validated"</span>: <span style={{ color: '#F6E05E' }}>true</span><br />
        <span style={{ color: '#ED8936' }}>&#125;</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#718096', fontSize: '6.5px' }}>
        <span>Postman v10.x</span>
        <span>Latency: 42ms</span>
      </div>
    </div>
  )
}

export default function ProjectRow({ project }) {
  const renderThumbnail = () => {
    switch (project.id) {
      case 'canteen-ease':
        return <CanteenEaseThumbnail />
      case 'responsive-websites':
        return <ResponsiveWebsitesThumbnail />
      case 'api-validation':
        return <ApiValidationThumbnail />
      default:
        return (
          <div className="project-placeholder">
            <span className="project-placeholder-label">{project.title}</span>
          </div>
        )
    }
  }

  return (
    <Link to={project.route} className="project-row" aria-label={`View details for ${project.title}`}>
      <div className="project-row-number">{project.number}</div>

      <div className="project-row-thumb">
        {renderThumbnail()}
      </div>

      <div className="project-row-body">
        <div className="project-row-category">
          <span>{project.category}</span>
          <span>•</span>
          <span style={{ color: 'var(--accent)' }}>{project.tags.join(' / ')}</span>
        </div>

        <h3 className="project-row-title">{project.title}</h3>

        <div className="project-row-tags">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        <p className="project-row-desc">{project.description}</p>
      </div>

      <div className="project-row-arrow">
        <ArrowRight size={22} />
      </div>
    </Link>
  )
}
