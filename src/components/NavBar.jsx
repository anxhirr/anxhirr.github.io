import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav '>
      <div className='nav__content container'>
        <div className='nav__logo'>
          <Link to='/' className=''>
            Portfolio
          </Link>
        </div>
        <ul className='nav__list flex-r-center'>
          <li className='nav__item'>
            <Link className='nav__link'>About</Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link'>Projects</Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__link'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
