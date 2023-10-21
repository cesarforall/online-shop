import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarIcon, ChevronRightIcon, ShoppingCartIcon, CurrencyEuroIcon } from '@heroicons/react/24/outline'

function OrdersCard ({ totalPrice, totalProducts, date, id }) {
  return (
    <div className='flex gap-4 justify-between items-center p-4 border rounded-lg border-black'>
      <ShoppingCartIcon className='w-6 h-6 text-black' />
      <span>Products: {totalProducts}</span>
      <CurrencyEuroIcon className='w-6 h-6 text-black' />
      <span>${totalPrice}</span>
      <CalendarIcon className='w-6 h-6 text-black' />
      <span>Date: {date}</span>
      <Link to={`/my-orders/${id}`}>
        <ChevronRightIcon className='w-6 h-6 text-black cursor-pointer' />
      </Link>
    </div>
  )
}

export default OrdersCard
