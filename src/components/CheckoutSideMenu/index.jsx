import React, { useContext } from 'react'
import ShoppingCardContext from '../../context/Context'
import { XMarkIcon } from '@heroicons/react/24/solid'

import OrderCard from '../OrderCard/index'

function CheckoutSideMenu () {
  const context = useContext(ShoppingCardContext)
  const { shoppingCart, setShowShoppingCart } = context

  return (
    <div className='ProductDetail flex flex-col gap-4 fixed top-16 right-0 w-96 h-auto p-6 z-10 border border-black rounded-lg bg-white'>
      <div className='flex justify-between items-center'>
        <h2>My order</h2>
        <button onClick={(prev) => { setShowShoppingCart(!prev) }}>
          <XMarkIcon className='h-6 w-6 text-black' />
        </button>
      </div>
      {
      shoppingCart.map(product => <OrderCard key={product.id + product.title} product={product} />)
    }
    </div>
  )
}

export default CheckoutSideMenu
