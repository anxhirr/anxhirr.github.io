import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import ContactModal from './ContactModal';

const NavBar = () => {
  const [checked, setChecked] = useState(false);
  const toggeled = checked ? 'nav--toggeled' : '';
  const [contact, setContact] = useState(true);

  const handleChecked = () => {
    setChecked((prev) => !prev);
  };

  const handleContact = () => {
    setContact(true);
    setChecked(false);
  };

  return (
    <>
      <nav className='nav'>
        <div className='nav__content container'>
          <div className='nav__logo'>
            <Link to='/' className=''>
              Portfolio
            </Link>
          </div>
          <ul className={`nav__list flex-r-center ${toggeled}`}>
            <li className='nav__item'>
              <Link className='nav__link'>About</Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link'>Projects</Link>
            </li>
            <li className='nav__item'>
              <Link onClick={handleContact} className='nav__link'>
                Contact
              </Link>
            </li>
          </ul>
          <div
            className={`nav__button ${checked ? 'nav__button--checked' : ''} `}
            onClick={handleChecked}
          >
            <Hamburger active={checked} />
            <span className='nav__background' />
          </div>
        </div>
      </nav>
      {contact && <ContactModal setContact={setContact} />}
    </>
  );
};

export default NavBar;
