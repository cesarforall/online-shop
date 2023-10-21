import { useContext } from 'react'
import ShoppingCardContext from '../../context/Context'
import OrdersCard from '../../components/OrdersCard'
import './MyOrders.css'

function MyOrders () {
  const context = useContext(ShoppingCardContext)
  const { orders } = context
  return (
    <div className='MyOrders'>
      <h1 className='font-semibold'>My Orders</h1>
      <div className='flex flex-col gap-4 pt-4'>
        {
          orders.length === 0 ? 'There is not orders' : orders.map((order, index) => <OrdersCard key={order?.date + order?.totalPrice} date={order.date} totalProducts={order.totalProducts} totalPrice={order.totalPrice} id={index} />)
        }
      </div>
    </div>
  )
}

export default MyOrders
