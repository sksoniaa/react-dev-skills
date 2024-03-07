 import { useState } from 'react'
import './NewSkillForm.css'


 export default function NewSkillForm({handleAddSkill}) {

  const [newSkill, setNewSkill] = useState({
    name: '',
    level: 3
  })

  function handleSubmit(e) {
    e.preventDefault();
    handleAddSkill(newSkill);
    setNewSkill({name: '', level: 3})
  }

  function handleChange(e) {
    setNewSkill({...newSkill, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit} className='NewSkillForm'>
      <label>Skill
        <input 
        type="text"
        value={newSkill.name}
        onChange={handleChange}
        name='name'
        
        />
      </label>
      <div>
        <label>Level
          <select
          value={newSkill.level}
          onChange={handleChange}
          name='level'
          type="number"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
      </div>
      <button>ADD SKILL</button>
    </form>
  )
}