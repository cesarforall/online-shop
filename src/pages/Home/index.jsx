import { useContext } from 'react'
import ShoppingCardContext from '../../context/Context'
import Modal from '../../components/Modal'
import Card from '../../components/Card/Card'
import ProductDetail from '../../components/ProductDetail'
import './Home.css'
import CheckoutSideMenu from '../../components/CheckoutSideMenu';

function Home ({ products }) {
  const productsLength = products?.length

  const context = useContext(ShoppingCardContext)
  const { showProductDetail, showShoppingCart } = context

  return (
    <div className='Home'>
      <h1>Home</h1>
      <p>Mostrando {productsLength} productos</p>
      {
        showProductDetail && <Modal><ProductDetail /></Modal>
      }
      {
        showShoppingCart && <Modal><CheckoutSideMenu /></Modal>
      }
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg'>
        {
          products?.map(product => <Card key={`${product?.id}${product.category.id}`} product={product} />)
        }
      </div>
    </div>
  )
}

export default Home
