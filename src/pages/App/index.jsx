import { useRoutes, BrowserRouter } from 'react-router-dom'
import ShoppingCardContext, { ShoppingCardProvider } from '../../context/Context'

import Home from '../Home'
import Products from '../Products'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'

import './App.css'
import { useContext } from 'react'

function AppRoutes () {
  const context = useContext(ShoppingCardContext)
  const { categories } = context

  const categoriesRoutes = categories.map(category => {
    const path = { path: `/${category}`, element: <Products /> }
    return path
  })

  const defaultRoutes = [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/all', element: <Products /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '*', element: <NotFound /> }
  ]

  const newRoutes = [...categoriesRoutes, ...defaultRoutes]

  const routes = useRoutes(newRoutes)

  return routes
}

function App () {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCardProvider>
  )
}

export default App
