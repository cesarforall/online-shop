import { useContext } from 'react'
import ShoppingCardContext from '../../context/Context'
import { Link } from 'react-router-dom'
import OrderCard from '../../components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { getCurrentPathSubstring } from '../../utils'
import './MyOrder.css'

function MyOrder () {
  const context = useContext(ShoppingCardContext)
  const { orders, lastOrder } = context

  const currentPathSubstring = getCurrentPathSubstring()
  const isCurrentPathId = currentPathSubstring !== 'last'

  const order = isCurrentPathId ? orders[parseInt(currentPathSubstring)] : []
  const lastOrderProducts = lastOrder.products
  const lastOrderTotal = lastOrder.totalPrice
  const products = order?.products
  const total = order?.totalPrice

  return (
    <div className='MyOrder flex flex-col gap-4 w-96 p-6 overflow-auto'>
      <div className='flex justify-between items-center pb-4'>
        <Link to='/my-orders'>
          <ChevronLeftIcon className='w-6 h-6 text-black' />
        </Link>
        <h2 className='w-full text-center font-semibold'>My order</h2>
      </div>
      {
        !isCurrentPathId
          ? lastOrderProducts?.map(product => <OrderCard key={product.id + product.title} product={product} />)
          : products?.map(product => <OrderCard key={product.id + product.title} product={product} />)
      }
      <div>
        <p className='flex justify-between gap-1'>
          <span>Total:</span>
          <span className='font-medium'>{!isCurrentPathId ? lastOrderTotal : total}$</span>
        </p>
      </div>
    </div>
  )
}

export default MyOrder
