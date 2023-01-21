import React from 'react'
import { Link } from 'react-router-dom'
import Service from './Service'
import { AiOutlineSearch } from 'react-icons/ai'

const SERVICES = [
  {
    title: 'Website Review',
    description:
      'I make sure your website is performing its best by thoroughly reviewing it before making any changes. I will also provide you with a detailed report of my findings and recommendations.',
    icon: { AiOutlineSearch },
  },
  {
    title: 'Business Strategy',
    description:
      'We discuss what you are trying to achieve, and place goals on your website planning how to achieve that. We also discuss your target audience and how to reach them.',
    icon: 'fas fa-search',
  },
  {
    title: 'User Experience Design',
    description:
      'I design your website to be as easy to use as possible while guiding users towards the end goal. I also make sure your website is visually appealing and easy to navigate.',
    icon: 'fas fa-search',
  },
  {
    title: 'Tailored Development',
    description:
      'I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product. I will make sure your website is built to your specifications.',
    icon: 'fas fa-search',
  },
  {
    title: 'Rigorous Testing',
    description:
      'I ensure your website is of excellent quality by thoroughly testing using multiple approaches.  I also make sure your website is compatible with all major browsers and devices.',
    icon: 'fas fa-search',
  },
  {
    title: 'Ongoing Support',
    description:
      'Your website is always growing. Whether you’re adding new features or making improvements I’m here to help. I will also make sure your website is always up to date with the latest security patches.',
    icon: 'fas fa-search',
  },
]

const ServicesSection = () => {
  return (
    <section className='services'>
      <h2 className='heading--secondary u-margin-b--small'>
        Everything you need for a perfect Website
      </h2>
      {/* <div>
        <ul className='services__list'>
          <Service services={SERVICES} />
        </ul>
      </div> */}

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
  )
}

export default ServicesSection
