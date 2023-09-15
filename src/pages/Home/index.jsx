import Card from '../../components/Card/Card'
import './Home.css'

function Home ({ products }) {
  const productsLength = products?.length
  return (
    <div className='Home'>
      <h1>Home</h1>
      <p>Mostrando {productsLength} productos</p>
      <div className='grid grid-cols-3 gap-4 w-full max-w-screen-lg'>
        {
          products?.map(product => <Card key={`${product?.id}${product.category.id}`} product={product} />)
        }
      </div>
    </div>
  )
}

export default Home
