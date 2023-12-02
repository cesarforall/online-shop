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
  const { showProductDetail, categoriesData } = context

  return (
    <div className='w-full max-w-[767px] flex flex-col items-center gap-4 px-4'>
      <h1 className='font-medium text-xl'>Category</h1>
      {
        showProductDetail && <Modal><ProductDetail /></Modal>
      }
      <div className='flex flex-col w-full items-center md:grid md:grid-cols-3 gap-4 pb-4'>
        {
          categoriesData?.map((category, index) =>
            <NavLink className='w-full' key={index} to={`/${category.name}`}>
              <CategoryCard key={index} category={category} />
            </NavLink>
          )
        }
      </div>
    </div>
  )
}

export default Home
