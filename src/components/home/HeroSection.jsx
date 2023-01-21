import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import todo from '../../assets/images/todo.png'
import hangman from '../../assets/images/hangman.png'
import accointing from '../../assets/images/accointing.png'

const HeroSection = () => {
  const [toShowImg, setToShowImg] = useState(hangman)

  const handleProjectClick = (e) => {
    const project = e.target.innerHTML

    if (project === 'Hangman') {
      setToShowImg(hangman)
    }
    if (project === 'Accointing') {
      setToShowImg(accointing)
    }
    if (project === 'To Do') {
      setToShowImg(todo)
    }
  }

  return (
    <section className='hero'>
      <div className='hero__content  container u-txt-c'>
        <p>Design. Build. Improve.</p>
        <h1 className='u-margin-b--small'>
          I create beautiful websites
          <pre></pre>
          your users will love
        </h1>
        <Link className='hero__btn btn u-margin-b--small'>Make it happen</Link>

        <img
          className=' hero__img u-margin-b--small'
          src={toShowImg}
          alt='hangman game project'
        />

        <div className='hero__projects'>
          <ul className='hero__projects-list'>
            <li className='hero__projects-list-item'>
              <button onClick={handleProjectClick}>Hangman</button>
            </li>
            <li className='hero__projects-list-item'>
              <button onClick={handleProjectClick}>Accointing</button>
            </li>
            <li className='hero__projects-list-item'>
              <button onClick={handleProjectClick}>To Do</button>
            </li>
            <li className='hero__projects-list-item'>
              <button>See my other Projects</button>
            </li>
          </ul>
        </div>
        {/* <span className='img-box'>
          <img className='hero__img' src={heroimg} alt='anxhi cheering' />
        </span>
        <h1 className='hero__heading'>
          Hi, I <br />
          am <br />
          <span className='hero__heading--span'>
            Anxhi <br />
            Rroshi
          </span>
        </h1> 
        <p className='subheading'>Front-End Dev</p> */}
      </div>
    </section>
  )
}

export default HeroSection
