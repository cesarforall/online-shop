import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCardContext from '../../context/Context'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const context = useContext(ShoppingCardContext)
  const { setShowShoppingCart } = context
  const activeStyle = 'underline underline-offset-8'
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/all'
            // className={(isActive) => isActive ? activeStyle : undefined}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes'>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics'>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/furnitures'>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys'>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/others'>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li>
          <NavLink to='/my-orders'>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account'>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'>
            Sign In
          </NavLink>
        </li>
        <li>
          <div className='flex gap-1'>
            <ShoppingBagIcon className='h-5 w-5 cursor-pointer' onClick={() => { setShowShoppingCart(prev => !prev) }} />
            {context.count}
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
