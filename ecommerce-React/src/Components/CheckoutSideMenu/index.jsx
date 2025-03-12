import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ecommerceCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { totalPrice, RandomDate } from '../../utils/index'
//component
import OrderCard from '../OrderCard'
//styles
import './CheckoutSideMenu.css'

const CheckoutSideMenu = () => {
  const context = useContext(ecommerceCartContext)

  const handleDeleteOrderItem = (id) => {
    const filterDeleteProduct =  context.carProduct.filter(product => product.id != id)
    context.setCarProduct(filterDeleteProduct)
    context.setCount(context.count - 1)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: RandomDate(),
      products: context.carProduct,
      totalProducts: context.carProduct.length,
      totalPrice: totalPrice(context.carProduct)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCount(0)
    context.setCarProduct([])
  }

  return (
    <aside className= {`${context.isCheckoutSideMenuOpened ? 'flex' : 'hidden' } product-detail-container flex-col fixed bg-white right-0 border border-black rounded`}  >
      <div className='flex justify-between items-center px-4 py-2'>
        <h2 className='font-medium text-xl'>My order</h2>
        <span>
          <XMarkIcon 
            onClick={() => context.closeCheckoutSideMenu()} 
            className='h-6 w-6 text-black cursor-pointer'
          />
        </span>
      </div>
      <div className='px-6 pt-6 overflow-y-scroll flex-1'>
        {
          context.carProduct.map(product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images}
              listenDelete={handleDeleteOrderItem}
            />
          ))
        }
      </div>
      <div className='px-6 mb-6'> 
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.carProduct)}</span>
        </p>
        <Link to={'my-orders/last'}>
          <button className='w-full bg-black py-3 text-white rounded-lg' 
            onClick={() => handleCheckout()}
          >Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu


