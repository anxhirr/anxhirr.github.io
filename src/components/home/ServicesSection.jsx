import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className='services'>
      <h2 className='heading--secondary u-margin-b--small'>What I do</h2>

      <div className='services--box flex-r-center u-margin-b--small container'>
        <div className='services__service flex-col-center'>
          <h3 className='heading-tertiary'>Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ducimus quae nostrum ullam fuga! Minus vel expedita maiores iure?
            Maiores, pariatur odio autem quam mollitia molestias repudiandae
            cupiditate alias optio.
          </p>
        </div>
        <div className='services__service flex-col-center'>
          <h3 className='heading-tertiary'>Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ducimus quae nostrum ullam fuga! Minus vel expedita maiores iure?
            Maiores, pariatur odio autem quam mollitia molestias repudiandae
            cupiditate alias optio.
          </p>
        </div>
        <div className='services__service flex-col-center'>
          <h3 className='heading-tertiary'>E-Commerce</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ducimus quae nostrum ullam fuga! Minus vel expedita maiores iure?
            Maiores, pariatur odio autem quam mollitia molestias repudiandae
            cupiditate alias optio.
          </p>
        </div>
      </div>
      <Link className='btn btn--purple'>My Work</Link>
    </section>
  );
};

export default ServicesSection;
