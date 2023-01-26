import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='bg-black pt-20 pb-14 text-xl flex flex-col items-center gap-8'>
        <a
          href='mailto:anxhirr@gmail.com'
          className=' text-purple hover:underline hover:opacity-80'
        >
          anxhirr@gmail.com
        </a>
        <ul className='text-purple flex gap-20 justify-between '>
          <li className='w-8 hover:opacity-80 '>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://al.linkedin.com/in/anxhi-rroshi-129684165'
            >
              <AiFillLinkedin className='fill-purple' />
            </a>
          </li>
          <li className='w-8 hover:opacity-80 '>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/anxhirr'
            >
              <AiFillGithub className='fill-purple' />
            </a>
          </li>
          <li className='w-8 hover:opacity-80 '>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/anxhiirr/'
            >
              <AiFillInstagram className='fill-purple' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
