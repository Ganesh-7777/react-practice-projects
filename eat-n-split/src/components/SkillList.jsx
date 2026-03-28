import Skill from './Skill'
import { SKILLS_DATA } from '../constants/skills'

const SkillList = () => {
  return (
    <div className='skill-list'>
      {SKILLS_DATA.map((item, index) => (
        <Skill
          key={index}
          skill={item.skill}
          emoji={item.emoji}
          color={item.color}
        />
      ))}
    </div>
  )
}

export default SkillList
