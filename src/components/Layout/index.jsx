import { useContext } from 'react'
import ShoppingCardContext from '../../context/Context'

import Modal from '../Modal'
import CheckoutSideMenu from '../CheckoutSideMenu'

function Layout ({ children }) {
  const context = useContext(ShoppingCardContext)
  const { showShoppingCart } = context
  return (
    <div className=' flex flex-col mt-48 md:mt-36 items-center text-center'>
      {children}
      {
        showShoppingCart && <Modal><CheckoutSideMenu /></Modal>
      }
    </div>
  )
}

export default Layout
