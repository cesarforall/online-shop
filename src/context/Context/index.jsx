import { createContext, useEffect, useState } from 'react'

const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [showProductDetail, setShowProductDetail] = useState(false)
  const [productDetail, setProductDetail] = useState({})
  const [shoppingCart, setShoppingCart] = useState([])
  const [showShoppingCart, setShowShoppingCart] = useState(false)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products').then(response => response.json()).then(data => setProducts(data))
  }, [])

  useEffect(() => {
    updateCount()
  }, [shoppingCart])

  function updateCount () {
    const count = shoppingCart.length
    setCount(count)
  }

  function updateProducts (product) {
    const productToFind = product.id
    const index = products.findIndex(product => product.id === productToFind)
    const newProduct = { ...products[index], isAddedToCart: true }
    const newProducts = [...products]
    newProducts[index] = newProduct
    setProducts(newProducts)
  }

  function addProductToShoppingCart (product) {
    const productId = product?.id
    const isProductOnShoppingCart = shoppingCart.find(product => product.id === productId)
    if (isProductOnShoppingCart) return
    const newShoppingCart = [...shoppingCart, product]
    setShoppingCart(newShoppingCart)
    updateCount()
    updateProducts(product)
    setShowShoppingCart(true)
  }

  return (
    <ShoppingCardContext.Provider value={{
      count,
      products,
      showProductDetail,
      setShowProductDetail,
      productDetail,
      setProductDetail,
      shoppingCart,
      setShoppingCart,
      showShoppingCart,
      setShowShoppingCart,
      addProductToShoppingCart
    }}
    >
      {children}
    </ShoppingCardContext.Provider>
  )
}

export default ShoppingCardContext
