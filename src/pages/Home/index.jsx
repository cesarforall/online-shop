import { useContext, useEffect, useState } from 'react'
import ShoppingCardContext from '../../context/Context'
import Modal from '../../components/Modal'
import Card from '../../components/Card/Card'
import ProductDetail from '../../components/ProductDetail'
import CategoryCard from '../../components/CategoryCard'
import { getCurrentPathSubstring, getRandomNumbers } from '../../utils'
import './Home.css'
import { NavLink } from 'react-router-dom'

function getRandomNames (n, max, products) {
  const randomNumbers = getRandomNumbers(n, max)
  const randomNames = randomNumbers.map(number => {
    const product = products.find(product => product.id === number)
    return product?.title.toLowerCase()
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

function Home () {
  const context = useContext(ShoppingCardContext)
  const { products, showProductDetail, addProductToShoppingCart, categoriesData } = context

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
      <h1 className='font-medium text-xl'>Categorías</h1>
      {
        filteredProducts.length > 0
          ? <p>Mostrando {categoriesData.length} categorías</p>
          : <p>😅 No hay categorías para mostrar</p>
      }
      {
        showProductDetail && <Modal><ProductDetail /></Modal>
      }
      <div className='grid grid-cols-autoFit200'>
        {
          categoriesData?.map((category, index) => <NavLink key={index} to={`/${category.name}`}> <CategoryCard key={index} category={category} /></NavLink>)
        }
      </div>
    </div>
  )
}

export default Home
