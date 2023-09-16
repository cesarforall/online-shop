import React, { useContext } from 'react'
import ShoppingCardContext from '../../context/Context'
import { XMarkIcon } from '@heroicons/react/24/solid'

function ProductDetail () {
  const context = useContext(ShoppingCardContext)
  return (
    <div className='ProductDetail flex flex-col fixed top-16 right-0 w-1/2 h-full z-10 border border-black rounded-lg bg-white'>
      <div className='flex justify-between items-center p-6'>
        <h2>Detail</h2>
        <button onClick={(prev) => { context.setShowProductDetail(!prev) }}>
          <XMarkIcon className='h-6 w-6 text-black' />
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
