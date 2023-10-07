import { useState, useEffect } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCardProvider } from '../../context/Context'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

import Navbar from '../../components/Navbar'

import './App.css'
import Layout from '../../components/Layout'

function AppRoutes () {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
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
