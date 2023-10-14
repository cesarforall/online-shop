import { useContext, useEffect, useState } from 'react'
import ShoppingCardContext from '../../context/Context'
import OrderCard from '../../components/OrderCard'
import './MyOrder.css'

function MyOrder () {
  const context = useContext(ShoppingCardContext)
  const { lastOrder } = context
  const [myOrder, setMyOrder] = useState(lastOrder)
  const lastOrderProducts = myOrder?.products
  const lastOrderTotal = myOrder?.totalPrice

  useEffect(() => { }, [lastOrder])

  console.log(lastOrder, myOrder)

  return (
    <div className='MyOrder flex flex-col gap-4 w-96 p-6 overflow-auto'>
      <div className='flex justify-between items-center'>
        <h2 className='w-full text-center font-semibold'>My order</h2>
      </div>
      {
        lastOrderProducts ? lastOrderProducts?.map(product => <OrderCard key={product.id + product.title} product={product} />) : 'No hay productos'
      }
      <div>
        <p className='flex justify-between gap-1'>
          <span>Total:</span>
          <span className='font-medium'>{lastOrderTotal}$</span>
        </p>
      </div>
    </div>
  )
}

export default MyOrder
