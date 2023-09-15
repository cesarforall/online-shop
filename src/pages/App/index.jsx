import { useState, useEffect } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

import Navbar from '../../components/Navbar'

import './App.css'
import Layout from '../../components/Layout'

function AppRoutes ({ products }) {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home products={products} />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/my-account',
      element: <MyAccount />
    },
    {
      path: '/my-order',
      element: <MyOrder />
    },
    {
      path: '/my-orders',
      element: <MyOrders />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return routes
}

function App () {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products').then(response => response.json()).then(data => setProducts(data))
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <AppRoutes products={products} />
      </Layout>
    </BrowserRouter>
  )
}

export default App
