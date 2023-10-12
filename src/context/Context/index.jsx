import { createContext, useEffect, useState } from 'react'

const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [showProductDetail, setShowProductDetail] = useState(false)
  const [productDetail, setProductDetail] = useState({})
  const [shoppingCart, setShoppingCart] = useState([])
  const [showShoppingCart, setShowShoppingCart] = useState(false)
  const [order, setOrder] = useState([])

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

  function updateProducts (product, deleteProduct) {
    const productToFind = product.id
    const index = products.findIndex(product => product.id === productToFind)
    const newProducts = [...products]
    let newProduct
    deleteProduct
      ? newProduct = { ...products[index], isAddedToCart: false }
      : newProduct = { ...products[index], isAddedToCart: true }
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

  function deleteShoppingCartProduct (product) {
    const productId = product.id
    const newShoppingCart = [...shoppingCart].filter(product => product.id !== productId)
    setShoppingCart(newShoppingCart)
    updateProducts(product, true)
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
      addProductToShoppingCart,
      deleteShoppingCartProduct,
      order,
      setOrder
    }}
    >
      {children}
    </ShoppingCardContext.Provider>
  )
}

export default ShoppingCardContext
