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
        <ul className='projects__list flex-r-center'>
          <li className='projects__item flex-col-center'>
            <span className='project__icon-box'>
              <AiFillBank />
            </span>

            <h5 className='project__title '>Bankist</h5>
            <p>
              Coming Soon... Bankist is a minimalist online banking application
              that allows the user to do very mininmal bank operations
            </p>
            <Link href='' className='btn btn--purple'>
              Learn more
            </Link>
          </li>
          <li className='projects__item flex-col-center'>
            <span className='project__icon-box'>
              <FcTodoList />
            </span>
            <h5 className='project__title'>ToDo</h5>
            <p>
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
            <h5 className='project__title'>GetWeather</h5>
            <p>
              Every website should be built with 2 primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be as fast
              as possible
            </p>
            <Link href='' className='btn btn--purple'>
              Learn more
            </Link>
          </li>
          <li className='projects__item flex-col-center'>
            <span className='project__icon-box'>
              <BiMemoryCard />
            </span>
            <h5 className='project__title'>Card Memory</h5>
            <p>
              Every website should be built with 2 primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be as fast
              as possible
            </p>
            <Link to='/card-memory-game' className='btn btn--purple'>
              Learn more
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
