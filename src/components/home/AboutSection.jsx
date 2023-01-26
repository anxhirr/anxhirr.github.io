import React from 'react'
import { Link } from 'react-router-dom'
import myimg from '../../assets/images/me-3.jpg'

const AboutSection = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className=' text-center mb-10'>
          <h1 className='text-4xl pb-4 px-52 border-b-2 border-b-red inline-block'>
            Who I am
          </h1>
        </div>
        <div className='w-full bg-secondary rounded-2xl flex max-w-4xl m-auto py-10 px-4'>
          <div className='max-w-xs rounded-lg overflow-hidden justify-self-center self-center'>
            <img src={myimg} alt='anxhi rroshi' className='' />
          </div>
          <div>
            <div className='p-10 bg-neutral rounded-3xl ml-4'>
              <h2 className='text-2xl mb-4'>
                Appasionete Designer & developer
              </h2>
              <p className='font-thin mb-5'>
                I am a positive, enthusiastic and competent Web Developer.I take
                my work as a Web Developer seriously and this means I always
                ensure my skills are kept up to date within this rapidly
                changing industry.
              </p>

              <Link to='/' className='btn btn--white'>
                Lets book a call
              </Link>
            </div>
          </div>
        </div>
        {/* <p>
            I am a positive, enthusiastic and competent Web Developer.I take my
            work as a Web Developer seriously and this means I always ensure my
            skills are kept up to date within this rapidly changing industry.
          </p>
          <p>
            If you hire me as your Web Developer, I assure you I will fit into
            your team quickly, I will always put the commercial needs of your
            business at the forefront of everything I do, and the work I carry
            out will be consistent to a first-class standard.
          </p> */}
        {/* <div className='img-box about__img-box'>
          <img src={aboutimg} alt='my img' />
        </div> */}
      </div>
    </section>
  )
}

export default AboutSection
