import './SkillListItem.css'

export default function SkillListItem({skill}) {
  return (
  <li className="SkillListItem"><p>{skill.name}</p><div>Level {skill.level}</div></li>
  )
}