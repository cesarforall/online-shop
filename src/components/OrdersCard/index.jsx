import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

function OrdersCard ({ totalPrice, totalProducts, date }) {
  return (
    <div className='flex gap-4 justify-between items-center p-4 border rounded-lg border-black'>
      <p>
        <span>Date: {date}</span>
        <span>Total products: {totalProducts}</span>
        <span>Total price: {totalPrice}</span>
      </p>
      <ArrowTopRightOnSquareIcon className='w-6 h-6 text-black cursor-pointer' />
    </div>
  )
}

export default OrdersCard
