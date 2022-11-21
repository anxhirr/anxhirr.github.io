import React from 'react';
import heroimg from '../images/me.jpg';

const HeroSection = () => {
  return (
    <section className='hero container'>
      <div className='hero__content'>
        <span className='img-box'>
          <img className='hero__img' src={heroimg} />
        </span>
        <h1 className='hero__heading'>
          Hi, I <br />
          am <br />
          <span className='hero__heading--span'>
            Anxhi <br />
            Rroshi
          </span>
        </h1>
        <p className='subheading'>Front-End Dev</p>
      </div>
    </section>
  );
};

export default HeroSection;
