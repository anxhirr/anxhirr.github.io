import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content flex-col-center'>
        <a href='mailto:anxhirr@gmail.com' className='footer__link'>
          anxhirr@gmail.com
        </a>
        <ul className='footer__social-list flex-r-center'>
          <li className='footer__social-item'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://al.linkedin.com/in/anxhi-rroshi-129684165'
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li className='footer__social-item'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/anxhirr'
            >
              <AiFillGithub />
            </a>
          </li>
          <li className='footer__social-item'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/anxhiirr/'
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
