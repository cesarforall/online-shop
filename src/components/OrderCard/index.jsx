import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard ({ product, onDelete }) {
  const { id, title, images, price } = product
  const image = images[0]
  const imageUrl = 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg'

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <figure className='w-16 h-16'>
          <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex gap-2 items-center'>
        <p className='text-lg font-medium'>${price}</p>
        <XMarkIcon className='h-4 w-4 text-black cursor-pointer' onClick={() => onDelete(product)} />
      </div>
    </div>
  )
}

export default OrderCard
