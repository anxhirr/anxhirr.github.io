import React from 'react'

const Service = ({ services }) => {
  return (
    <div>
      {services.map((service, index) => {
        return (
          <li key={index} className='services__item'>
            <div className='services__icon'></div>
            <h3 className='services__title'>{service.title}</h3>
            <p className='services__description'>{service.description}</p>
          </li>
        )
      })}
    </div>
  )
}

export default Service
