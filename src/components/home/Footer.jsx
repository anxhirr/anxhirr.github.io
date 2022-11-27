import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content flex-col-center'>
        <Link className='footer__link'>anxhirr@gmail.com</Link>
        <ul className='footer__social-list flex-r-center'>
          <li className='footer__social-item'>
            <AiFillLinkedin />
          </li>
          <li className='footer__social-item'>
            <AiFillGithub />
          </li>
          <li className='footer__social-item'>
            <AiFillInstagram />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
