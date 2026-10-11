import React from 'react'
import { experiences } from '../data/experience'

export default function ExperienceTimeline() {
  return (
    <div className="timeline-strip">
      {experiences.map((exp) => (
        <div key={exp.id} className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content-col">
            <div className="timeline-number">{exp.number}</div>
            <h4 className="timeline-company">{exp.shortName}</h4>
            <div className="timeline-role">{exp.role}</div>
            <div className="timeline-period">{exp.period}</div>
            <div className="timeline-location">{exp.location}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
