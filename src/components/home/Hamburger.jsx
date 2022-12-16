import React from 'react'

const Hamburger = ({ active }) => {
  const animation = active ? 'close-anim' : 'open-anim'
  const color = active ? 'purple' : 'black'

  return (
    <div className={`hamburger-box ${color}`}>
      <svg
        className={`hamburger ${animation}`}
        viewBox='0 0 100 100'
        width='5rem'
      >
        <line
          className='hamburger__line  hamburger__line--top'
          x1='85'
          x2='15'
          y1='35'
          y2='35'
          stroke='var(--hamburger-color)'
          strokeWidth='1.5rem'
          strokeLinecap='round'
          strokeDasharray='80'
          strokeDashoffset='0'
        />
        <line
          className='hamburger__line  hamburger__line--bottom'
          x1='15'
          x2='85'
          y1='65'
          y2='65'
          stroke='var(--hamburger-color)'
          strokeWidth='1.5rem'
          strokeLinecap='round'
          strokeDasharray='80'
          strokeDashoffset='0'
        />
      </svg>
    </div>
  )
}

export default Hamburger
