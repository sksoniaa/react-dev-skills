import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillList from './SkillList/SkillList'
import NewSkillForm from './NewSkillForm/NewSkillForm'




export default function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])

  function handleAddSkill(skillInput){
    console.log(skillInput, " <---- skillInput in App.jsx");

    setSkills([skillInput, ...skills])
  }

  return (
    <div className='App'>
      <h1>React Dev Skills</h1>
      <SkillList skillList={skills} />
      <NewSkillForm handleAddSkill={handleAddSkill}/>
    </div>
  )
}
