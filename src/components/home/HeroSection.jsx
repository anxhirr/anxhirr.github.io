import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import rroshistore from '../../assets/images/rroshi-store.PNG'
import hangman from '../../assets/images/hangman.png'
import accointing from '../../assets/images/accointing.png'
import { useEffect } from 'react'

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
    if (project === 'Rroshi Store') {
      setToShowImg(rroshistore)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (toShowImg === hangman) {
        setToShowImg(accointing)
      } else if (toShowImg === accointing) {
        setToShowImg(rroshistore)
      } else if (toShowImg === rroshistore) {
        setToShowImg(hangman)
      }
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [toShowImg])

  return (
    <section className='hero'>
      <div className='container u-txt-c flex flex-col gap-10 items-center pt-20'>
        <p className='-mb-6 text-lg'>Design. Build. Improve.</p>
        <h1 className='text-5xl'>
          I create beautiful websites
          <pre></pre>
          your users will love
        </h1>
        <Link className='hero__btn btn text-sm bg-purple'>Make it happen</Link>

        <div>
          <img className=' ' src={toShowImg} alt='hangman game project' />
        </div>

        <div className=' w-full'>
          <ul className=' flex justify-between '>
            <li className='border-b-4 border-b-solid border-b-purple '>
              <button onClick={handleProjectClick}>Hangman</button>
            </li>
            <li className='border-b-4 border-b-solid border-b-purple'>
              <button onClick={handleProjectClick}>Accointing</button>
            </li>
            <li className='border-b-4 border-b-solid border-b-purple'>
              <button onClick={handleProjectClick}>Rroshi Store</button>
            </li>
            <li className='border-b-4 border-b-solid border-b-purple'>
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
