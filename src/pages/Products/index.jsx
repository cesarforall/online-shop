import { useContext, useEffect, useState } from 'react'
import ShoppingCardContext from '../../context/Context'
import Modal from '../../components/Modal'
import Card from '../../components/Card/Card'
import ProductDetail from '../../components/ProductDetail'
import { getCurrentPathSubstring, getRandomNumbers } from '../../utils'

function getRandomNames (n, max, products) {
  const randomNumbers = getRandomNumbers(n, max)
  const randomNames = randomNumbers.map(number => {
    return products[randomNumbers[0]]?.title.toLowerCase()
  })
  return randomNames
}

function filterProductsByTitle (products, searchValue) {
  if (searchValue === '') return products
  const filteredProducts = products?.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
  return filteredProducts
}

function searchProductsByCategory (products, category) {
  const lowerCaseCategory = category.toLowerCase()
  if (lowerCaseCategory === 'all' || lowerCaseCategory === '') {
    return products
  }
  const productsByCategory = products?.filter(product => product?.category?.name.toLowerCase() === lowerCaseCategory)
  return productsByCategory
}

function Products () {
  const context = useContext(ShoppingCardContext)
  const { products, showProductDetail, addProductToShoppingCart } = context

  const [searchValue, setSearchValue] = useState('')

  const category = getCurrentPathSubstring()
  const productsByCategory = searchProductsByCategory(products, category)
  const filteredProducts = filterProductsByTitle(productsByCategory, searchValue)

  const randomNames = getRandomNames(1, productsByCategory.length, products)

  function onInputValueChange (e) {
    const inputValue = e.target.value
    setSearchValue(inputValue)
  }

  useEffect(() => {
  }, [searchValue])

  return (
    <div className='flex flex-col items-center gap-4'>
      <h1 className='font-medium text-xl'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <input
        type='text' placeholder={randomNames.join(', ')} className='w-[280px] rounded-lg border border-black w-80 p-2 italic focus:outline-none' onChange={(e) => onInputValueChange(e)} value={searchValue}
      />
      {
        filteredProducts.length > 0
          ? <p>Mostrando {filteredProducts.length} productos</p>
          : <p>😅 No hay productos para mostrar</p>
      }
      {
        showProductDetail && <Modal><ProductDetail /></Modal>
      }
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {
          filteredProducts?.map(product => <Card key={`${product?.id}${product.category.id}`} product={product} addProductToShoppingCart={addProductToShoppingCart} />)
        }
      </div>
    </div>
  )
}

export default Products
