import React from 'react'

const Service = ({ services }) => {
  return (
    <>
      {services.map((service, index) => {
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

export default Service
