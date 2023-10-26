import React, { useContext } from 'react'
import ShoppingCardContext from '../../context/Context'
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'

function Card ({ product, addProductToShoppingCart }) {
  const { title, price, images, category, isAddedToCart } = product
  const image = images[0]

  const context = useContext(ShoppingCardContext)
  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={() => {
        if (!context.showProductDetail) {
          context.setProductDetail(product)
          context.setShowProductDetail(true)
        }
      }}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category.name}</span>
        <img className='w-full h-full object-cover rounded-lg border' src={image} alt={title} />
        {
          !isAddedToCart
            ? <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'><PlusIcon onClick={(e) => { e.stopPropagation(); addProductToShoppingCart(product) }} /></div>
            : <div className='absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2 p-1'><CheckIcon onClick={e => e.stopPropagation()} /></div>
        }
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </div>
  )
}

export default Card
