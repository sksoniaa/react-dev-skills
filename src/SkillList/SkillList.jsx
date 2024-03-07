import SkillListItem from "../SkillListItem/SkillListItem";
import './SkillList.css'

export default function SkillList({skillList}) {

  const skillLi = skillList.map((item, idx) => {
    return (<SkillListItem skill={item} key={idx}/>)
  })
  console.log(skillLi);

  return (
    <ul className="SkillList">
      {skillLi}
    </ul>
  )
}