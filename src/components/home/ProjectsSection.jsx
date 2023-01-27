import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillBank } from 'react-icons/ai'
import { FcTodoList } from 'react-icons/fc'
import { TiWeatherStormy } from 'react-icons/ti'
import { BiMemoryCard } from 'react-icons/bi'

const ProjectsSection = () => {
  return (
    <section className='projects'>
      <div className='projects__content xl:container m-auto '>
        <div className='text-center mb-16'>
          <h2 className='text-4xl'>My Projects</h2>
        </div>
        <ul className='projects__list place-items-center'>
          <li className='projects__item text-center bg-secondary flex flex-col gap-6 items-center p-4 max-w-xs'>
            <span className='project__icon-box'>
              <TiWeatherStormy />
            </span>
            <h5 className='project__title text-2xl'>Hangman</h5>
            <p className='project__description font-thin text-sm'>
              A simple hangman game built with React. The user can guess a word
              by clicking on the letters of the alphabet or by typing the letter
              on the keyboard.
            </p>
            <Link to='hangman-game' className='btn btn--purple'>
              Learn more
            </Link>
          </li>
          <li className='projects__item text-center bg-secondary flex flex-col gap-6 items-center p-4 max-w-xs'>
            <span className='project__icon-box'>
              <AiFillBank />
            </span>

            <h5 className='project__title text-2xl '>Rroshi Store</h5>
            <p className='project__description font-thin text-sm'>
              Rroshi store is a simple e-commerce website built with NextJs. It
              uses Stripe for payment processing and Sanity for storing data. It
              is hosted on Netlify.
            </p>
            <a
              href='https://rroshi-shop.netlify.app/'
              className='btn btn--purple'
            >
              Learn more
            </a>
          </li>
          <li className='projects__item text-center bg-secondary flex flex-col gap-6 items-center p-4 max-w-xs'>
            <span className='project__icon-box'>
              <BiMemoryCard />
            </span>
            <h5 className='project__title text-2xl'>Memory </h5>
            <p className='project__description font-thin text-sm'>
              Memory game built with React. The user can play the game by
              clicking on the cards. The game is over when all the cards are
              flipped.
            </p>
            <Link to='/card-memory-game' className='btn btn--purple'>
              Learn more
            </Link>
          </li>

          <li className='projects__item text-center bg-secondary flex flex-col gap-6 items-center p-4 max-w-xs'>
            <span className='project__icon-box'>
              <FcTodoList />
            </span>
            <h5 className='project__title text-2xl'>ToDo</h5>
            <p className='project__description font-thin text-sm'>
              Every website should be built with 2 primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be as fast
              as possible.
            </p>
            <Link to='/to-do' className='btn btn--purple'>
              Learn more
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ProjectsSection
