import React from 'react'
import { skillsFlat } from '../data/skills'
import { 
  Code, 
  Terminal, 
  Globe, 
  Database, 
  CheckCircle2, 
  CheckSquare, 
  Layers, 
  FileSpreadsheet, 
  Compass, 
  Wrench, 
  Send 
} from 'lucide-react'

// Icon mapper for skills
function getSkillIcon(name) {
  switch (name) {
    case 'Python':
      return <Terminal size={14} />
    case 'C':
    case 'JavaScript':
      return <Code size={14} />
    case 'React.js':
    case 'Node.js':
    case 'Express.js':
    case 'HTML5':
    case 'CSS3':
    case 'WordPress':
      return <Globe size={14} />
    case 'MongoDB':
    case 'MySQL':
      return <Database size={14} />
    case 'Manual Testing':
      return <CheckCircle2 size={14} />
    case 'Jira':
      return <CheckSquare size={14} />
    case 'Postman':
      return <Send size={14} />
    case 'Git & GitHub':
      return <Terminal size={14} />
    case 'Figma':
    case 'UI/UX':
      return <Layers size={14} />
    case 'MS Excel':
      return <FileSpreadsheet size={14} />
    case 'Problem Solving':
      return <Compass size={14} />
    default:
      return <Wrench size={14} />
  }
}

export default function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skillsFlat.map((skill) => (
        <div key={skill.name} className="skill-chip">
          <div className="skill-chip-icon">
            {getSkillIcon(skill.name)}
          </div>
          <span className="skill-chip-name">{skill.name}</span>
        </div>
      ))}
    </div>
  )
}
