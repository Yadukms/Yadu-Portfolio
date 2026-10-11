import React from 'react'

export default function CapabilityStrip() {
  const capabilities = [
    {
      num: '01',
      title: 'WEB DEVELOPMENT',
      description: 'Building responsive and user-friendly web experiences.',
    },
    {
      num: '02',
      title: 'QA & TESTING',
      description: 'Ensuring quality through test cases, manual testing and API validation.',
    },
    {
      num: '03',
      title: 'PROJECT COORDINATION',
      description: 'Bridging ideas, people and technology to deliver real solutions.',
    },
  ]

  return (
    <section className="capability-section" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ padding: 0 }}>
        <div className="capability-strip">
          {capabilities.map((item) => (
            <div key={item.num} className="capability-col">
              <div className="capability-num">{item.num}</div>
              <h3 className="capability-title">{item.title}</h3>
              <p className="capability-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
