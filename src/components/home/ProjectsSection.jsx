import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillBank } from 'react-icons/ai';
import { FcTodoList } from 'react-icons/fc';
import { TiWeatherStormy } from 'react-icons/ti';
import { BiMemoryCard } from 'react-icons/bi';

const ProjectsSection = () => {
  return (
    <section className='projects'>
      <div className='projects__content container'>
        <div className='u-margin-b--small txt-c'>
          <h2 className='heading--secondary '>My Projects</h2>
        </div>
        <ul className='projects__list '>
          <li className='projects__item flex-col-center'>
            <span className='project__icon-box'>
              <FcTodoList />
            </span>
            <h5 className='project__title'>ToDo</h5>
            <p className='project__description'>
              Every website should be built with 2 primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be as fast
              as possible
            </p>
            <Link to='/to-do' className='btn btn--purple'>
              Learn more
            </Link>
          </li>
          <li className='projects__item flex-col-center'>
            <span className='project__icon-box'>
              <TiWeatherStormy />
            </span>
            <h5 className='project__title'>Hangman</h5>
            <p className='project__description'>
              A simple hangman game built with React. The user can guess a word
              by clicking on the letters of the alphabet or by typing the letter
              on the keyboard and pressing enter.
            </p>
            <Link to='hangman-game' className='btn btn--purple'>
              Learn more
            </Link>
          </li>
          <li className='projects__item flex-col-center'>
            <span className='project__icon-box'>
              <BiMemoryCard />
            </span>
            <h5 className='project__title'>Memory Game</h5>
            <p className='project__description'>
              Every website should be built with 2 primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be as fast
              as possible
            </p>
            <Link to='/card-memory-game' className='btn btn--purple'>
              Learn more
            </Link>
          </li>
          <li className='projects__item flex-col-center'>
            <span className='project__icon-box'>
              <AiFillBank />
            </span>

            <h5 className='project__title '>Calculator</h5>
            <p className='project__description'>
              Calculator is a minimalist mathematic application that allows the
              user to do very mininmal math operations
            </p>
            <Link to='calculator' className='btn btn--purple'>
              Learn more
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
