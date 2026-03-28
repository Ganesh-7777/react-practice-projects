import Skill from './Skill'

const SkillList = () => {
  return (
    <div className='skill-list'>
      <Skill skill='React' emoji='💪' color='blue' />
      <Skill skill='HTML+CSS' emoji='💪' color='orange' />
      <Skill skill='JavaScript' emoji='💪' color='yellow' />
      <Skill skill='Svelte' emoji='👶' color='orangered' />
    </div>
  )
}

export default SkillList
