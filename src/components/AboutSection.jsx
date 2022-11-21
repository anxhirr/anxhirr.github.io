import React from 'react';
import aboutimg from '../assets/images/me-2.jpg';

const AboutSection = () => {
  return (
    <section className='about' id='about'>
      <div className='about__content container'>
        <h2 className='heading--secondary'>Who I am</h2>
        <p className='subheading'>Appasionete Designer & developer</p>
        <div className='about__info'>
          <p>
            I am a positive, enthusiastic and competent Web Developer.I take my
            work as a Web Developer seriously and this means I always ensure my
            skills are kept up to date within this rapidly changing industry.
          </p>
          <p>
            If you hire me as your Web Developer, I assure you I will fit into
            your team quickly, I will always put the commercial needs of your
            business at the forefront of everything I do, and the work I carry
            out will be consistent to a first-class standard.
          </p>
        </div>
        <div className='img-box about__img-box'>
          <img src={aboutimg} alt='my img' />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
