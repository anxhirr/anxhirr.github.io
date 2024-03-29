import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import ContactModal from './ContactModal'

import myimg from '../../assets/images/me-3.jpg'

const NavBar = () => {
  const [checked, setChecked] = useState(false)
  const toggeled = checked ? 'nav--toggeled' : ''
  const [contact, setContact] = useState(false)

  const handleChecked = () => {
    setChecked((prev) => !prev)
  }

  const handleContact = () => {
    setContact(true)
    setChecked(false)
  }

  return (
    <>
      <nav className={`nav ${toggeled} text-lg`}>
        <div className=' flex justify-between container py-4'>
          <div className='flex gap-3 justify-center items-center'>
            <img className='nav__img w-12 h-12 ' src={myimg} alt='' />
            <Link to='/'>Anxhi Rroshi</Link>
          </div>
          <ul className='nav__list flex-r-center'>
            <li className='nav__item'>
              <Link className='nav__link'>About</Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link'>Projects</Link>
            </li>
            <li className='nav__item'>
              <Link onClick={handleContact} className='nav__link'>
                Hire me today
              </Link>
            </li>
          </ul>
          <button
            className={`nav__button ${checked ? 'nav__button--checked' : ''} `}
            onClick={handleChecked}
          >
            <Hamburger active={checked} />
            <span className='nav__background' />
          </button>
        </div>
      </nav>
      {contact && <ContactModal setContact={setContact} />}
    </>
  )
}

export default NavBar
