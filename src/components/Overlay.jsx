import React from 'react';
import ReactDOM from 'react-dom';

const Overlay = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='overlay'>
      <div className='overlay__content'>{children}</div>
    </div>,
    document.getElementById('portal')
  );
};

export default Overlay;
