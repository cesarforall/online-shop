import { createContext, useState } from 'react'

const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [showProductDetail, setShowProductDetail] = useState(false)
  const [product, setProduct] = useState({})

  return (
    <ShoppingCardContext.Provider value={{
      count,
      setCount,
      showProductDetail,
      setShowProductDetail,
      product,
      setProduct
    }}
    >
      {children}
    </ShoppingCardContext.Provider>
  )
}

export default ShoppingCardContext
