import { useState } from 'react'
import './Accordion.css'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = index => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  if (!items || items.length === 0) {
    return <div className='accordion-empty'>No items to display.</div>
  }

  return (
    <div className='accordion-container'>
      {items.map((val, ind) => {
        const isActive = activeIndex === ind

        return (
          <div key={ind} className='accordion-item'>
            <button
              className={`accordion-header ${isActive ? 'active' : ''}`}
              onClick={() => handleClick(ind)}
              aria-expanded={isActive}
              aria-controls={`accordion-content-${ind}`}
            >
              <span>{val.title}</span>
              <span className='icon'>▼</span>
            </button>
            {isActive && (
              <div
                className='accordion-content'
                id={`accordion-content-${ind}`}
              >
                <p>{val.content}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
