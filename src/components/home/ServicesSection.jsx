import React from 'react'
import { Link } from 'react-router-dom'
// import Service from './Service'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoBusinessSharp } from 'react-icons/io5'
import { MdDesignServices } from 'react-icons/md'
import { MdDeveloperMode } from 'react-icons/md'
import { TbTestPipe } from 'react-icons/tb'
import { BiSupport } from 'react-icons/bi'

const SERVICES = [
  {
    title: 'Website Review',
    description:
      'I make sure your website is performing its best by thoroughly reviewing it before making any changes.',
    icon: <AiOutlineSearch />,
  },
  {
    title: 'Business Strategy',
    description:
      'We discuss what you are trying to achieve, and place goals on your website planning how to achieve that. We also discuss your target audience and how to reach them.',
    icon: <IoBusinessSharp />,
  },
  {
    title: 'User Experience Design',
    description:
      'I design your website to be as easy to use as possible while guiding users towards the end goal. I also make sure your website is visually appealing and easy to navigate.',
    icon: <MdDesignServices />,
  },
  {
    title: 'Tailored Development',
    description:
      'I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product. I will make sure your website is built to your specifications.',
    icon: <MdDeveloperMode />,
  },
  {
    title: 'Rigorous Testing',
    description:
      'I ensure your website is of excellent quality by thoroughly testing using multiple approaches.  I also make sure your website is compatible with all major browsers and devices.',
    icon: <TbTestPipe />,
  },
  {
    title: 'Ongoing Support',
    description:
      'Your website is always growing. Whether you’re adding new features or making improvements I’m here to help. I will also make sure your website is always up to date with the latest security patches.',
    icon: <BiSupport />,
  },
]

const Service = () => {
  return (
    <>
      {SERVICES.map((service, index) => {
        console.log(service)

        return (
          <li key={index} className='flex -mx-3 text-left'>
            <div className='mx-3'>
              <div className='p-4 w-16 h-16 grid place-items-center'>
                {service.icon}
              </div>
            </div>
            <div>
              <h3 className='services__title text-xl mb-4'>{service.title}</h3>
              <p className='services__description font-thin text-xs'>
                {service.description}
              </p>
            </div>
          </li>
        )
      })}
    </>
  )
}

const ServicesSection = () => {
  console.log(AiOutlineSearch())
  return (
    <section className='services'>
      <div className='container py-20'>
        <div className='text-center mb-14'>
          <h2 className='text-3xl pb-4 border-b-4 border-b-purple inline-block px-14'>
            Everything you need for a perfect Website
          </h2>
        </div>
        <div className='mb-14'>
          <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 lg:gap-y-24 gap-y-16  text-left'>
            <Service />
          </ul>
        </div>
        <div className='text-center'>
          <Link className='btn btn--purple '>Find more</Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
