import React from 'react'
import Overlay from '../../overlay/Overlay'

const ContactModal = ({ setContact }) => {
  const handleClose = () => {
    setContact(false)
  }

  return (
    <Overlay>
      <div className='contact-modal'>
        <button onClick={handleClose} className='contact-modal__close-btn'>
          close
        </button>
        <div className='contact-modal__content'>
          <h2 className='contact-modal__title u-margin-b--tiny'>Contact</h2>
          <form className='contact-modal__form'>
            <input
              type='text'
              id='name'
              placeholder='Name'
              className='contact-modal__name-input'
            />
            <label htmlFor='name' className='contact-modal__name-label' />

            <input
              type='email'
              id='email'
              placeholder='Email'
              className='contact-modal__email-input'
            />
            <label htmlFor='email' className='contact-modal__email-label' />
          </form>
        </div>
      </div>
    </Overlay>
  )
}

export default ContactModal
