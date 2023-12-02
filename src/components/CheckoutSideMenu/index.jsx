import React, { useContext } from 'react'
import ShoppingCardContext from '../../context/Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { totalPrice } from '../../utils'
import OrderCard from '../OrderCard/index'
import { Link } from 'react-router-dom'

function CheckoutSideMenu () {
  const context = useContext(ShoppingCardContext)
  const { shoppingCart, setShoppingCart, setShowShoppingCart, deleteShoppingCartProduct, setOrders, setLastOrder } = context

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: shoppingCart,
      totalProducts: shoppingCart.length,
      totalPrice: totalPrice(shoppingCart)
    }
    setLastOrder(orderToAdd)
    setOrders((prev) => [...prev, orderToAdd])
    setShoppingCart([])
    setShowShoppingCart(prev => !prev)
  }

  return (
    <div className='flex flex-col gap-4 fixed top-[142px] right-0 mr-1 min-w-[300px] min-h-1 max-h-[70%] p-6 z-10 border border-black rounded-lg bg-white overflow-y-auto'>
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
      <Link to='/my-orders/last'>
        <button className='bg-black w-full py-3 text-white rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
      </Link>
    </div>
  )
}

export default CheckoutSideMenu
