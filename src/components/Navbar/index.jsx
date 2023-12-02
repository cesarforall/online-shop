import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCardContext from '../../context/Context'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const context = useContext(ShoppingCardContext)
  const { setShowShoppingCart, categories } = context

  const activeStyle = 'underline underline-offset-8'

  return (
    <nav className='flex flex-col gap-3 fixed z-10 top-0 w-full max-h-[180px] overflow-scroll md:overflow-auto p-4 font-normal text-md bg-white shadow'>
      <NavLink className='font-semibold text-2xl text-center' to='/'>
        Online Shop
      </NavLink>
      <div className='grid gap-3 items-center md:items-start md:grid-cols-2'>
        <ul className='md:order-last flex flex-wrap justify-center md:justify-end items-center gap-3'>
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
        <ul className='flex flex-wrap justify-center md:justify-start items-center gap-3'>
          <li>
            <NavLink
              to='/all'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined}
            >
              All
            </NavLink>
          </li>
          {
          categories.map(category => {
            return (
              <li key={category}>
                <NavLink
                  to={`/${category}`} className={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </NavLink>
              </li>
            )
          })
        }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
