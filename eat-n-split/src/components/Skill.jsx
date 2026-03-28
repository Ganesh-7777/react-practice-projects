import PropTypes from 'prop-types'

function Skill ({ skill, emoji, color }) {
  return (
    <div className='skill' style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  )
}

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Skill
