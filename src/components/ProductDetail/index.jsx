import React, { useContext } from 'react'
import ShoppingCardContext from '../../context/Context'
import { XMarkIcon } from '@heroicons/react/24/solid'

// {
//   "id": 4,
//   "title": "Handmade Fresh Table",
//   "price": 687,
//   "description": "Andy shoes are designed to keeping in...",
//   "category": {
//     "id": 5,
//     "name": "Others",
//     "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
//   },
//   "images": [
//     "https://placeimg.com/640/480/any?r=0.9178516507833767",
//     "https://placeimg.com/640/480/any?r=0.9300320592588625",
//     "https://placeimg.com/640/480/any?r=0.8807778235430017"
//   ]
// }

function ProductDetail () {
  const context = useContext(ShoppingCardContext)
  const productDetail = context.productDetail
  const { title, price, description, category, images } = productDetail
  return (
    <div className='ProductDetail flex flex-col gap-4 fixed top-16 right-0 w-96 h-auto p-6 z-10 border border-black rounded-lg bg-white'>
      <div className='flex justify-between items-center'>
        <h2>Detail</h2>
        <button onClick={(prev) => { context.setShowProductDetail(!prev) }}>
          <XMarkIcon className='h-6 w-6 text-black' />
        </button>
      </div>
      <figure className=''>
        <img className='rounded-lg' src={images[0]} alt={description + 'image'} />
      </figure>
      <div className='flex flex-col gap-4'>
        <p>
          <span>{title}</span>
          <span> ${price}</span>
        </p>
        <p>{description}</p>
      </div>
      <p>
        <span className='p-1 px-2 rounded-full bg-slate-200'>{category.name}</span>
      </p>
    </div>
  )
}

export default ProductDetail
