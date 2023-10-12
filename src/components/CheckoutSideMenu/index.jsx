import React, { useContext } from 'react'
import ShoppingCardContext from '../../context/Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { totalPrice } from '../../utils'
import OrderCard from '../OrderCard/index'

function CheckoutSideMenu () {
  const context = useContext(ShoppingCardContext)
  const { shoppingCart, setShoppingCart, setShowShoppingCart, deleteShoppingCartProduct, order, setOrder } = context

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      product: shoppingCart,
      totalProducts: shoppingCart.length,
      totalPrice: totalPrice(shoppingCart)
    }
    setOrder((prev) => [...prev, orderToAdd])
    setShoppingCart([])
    setShowShoppingCart(prev => !prev)
  }

  return (
    <div className='ProductDetail flex flex-col gap-4 fixed top-16 right-0 w-96 min-h-1 max-h-[80%] p-6 z-10 border border-black rounded-lg bg-white overflow-auto'>
      <div className='flex justify-between items-center'>
        <h2>My order</h2>
        <button onClick={(prev) => { setShowShoppingCart(!prev) }}>
          <XMarkIcon className='h-6 w-6 text-black' />
        </button>
      </div>
      {
      shoppingCart.map(product => <OrderCard key={product.id + product.title} product={product} onDelete={deleteShoppingCartProduct} />)
    }
      <div>
        <p className='flex justify-between gap-1'>
          <span>Total:</span>
          <span className='font-medium'>{totalPrice(shoppingCart)}$</span>
        </p>
      </div>
      <button className='bg-black w-full py-3 text-white rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
    </div>
  )
}

export default CheckoutSideMenu
