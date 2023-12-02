import React from 'react'
import { createPortal } from 'react-dom'

function Modal ({ children }) {
  return (
    createPortal(
      <div className='fixed w-full h-screen top-0 bg-gradient-to-r from-slate-500'>
        {children}
      </div>, document.getElementById('modal')
    )

  )
}

export default Modal
