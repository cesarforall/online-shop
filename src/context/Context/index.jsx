import { createContext, useState } from 'react'

const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [showProductDetail, setShowProductDetail] = useState(false)
  const [productDetail, setProductDetail] = useState({})
  const [shoppingCart, setShoppingCart] = useState([])
  const [showShoppingCart, setShowShoppingCart] = useState(true)

  return (
    <ShoppingCardContext.Provider value={{
      count,
      setCount,
      showProductDetail,
      setShowProductDetail,
      productDetail,
      setProductDetail,
      shoppingCart,
      setShoppingCart,
      showShoppingCart,
      setShowShoppingCart
    }}
    >
      {children}
    </ShoppingCardContext.Provider>
  )
}

export default ShoppingCardContext
