import { useContext } from 'react'
import { ecommerceCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Layout from "../../Layout"
import OrderCard from '../../Components/OrderCard'

const MyOrder = () => {
  const context = useContext(ecommerceCartContext)
  const currentPath = window.location.pathname
  let indexOrderGroup = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if(indexOrderGroup) {
    indexOrderGroup = context.order?.length - 1
  }

  return (
    <Layout>
      <div className="flex justify-center w-80 relative items-center mb-6">
        <Link to={'/my-orders'} className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"></ChevronLeftIcon>
        </Link>
          <h2>My Order</h2>
      </div>
      <div className='mt-5 flex flex-col w-80'>
        {
          context.order?.[indexOrderGroup]?.products.map(product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder