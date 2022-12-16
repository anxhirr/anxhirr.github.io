import React from 'react'
import ReactDOM from 'react-dom'

const Overlay = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='overlay'>{children}</div>,
    document.getElementById('portal')
  )
}

export default Overlay
