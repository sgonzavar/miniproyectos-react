import { useContext } from 'react'
import { ecommerceCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetail.css'

const ProductDetail = () => {
  const context = useContext(ecommerceCartContext)

  return (
    <aside className= {`${context.isProductDetailOpened ? 'flex' : 'hidden' } product-detail-container flex-col fixed bg-white right-0 border border-black rounded`}  >
      <div className='flex justify-between items-center px-4 py-2'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <span>
          <XMarkIcon 
            onClick={() => context.closeProductDetail()} 
            className='h-6 w-6 text-black cursor-pointer'
          />
        </span>
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg' 
          src={context.productToShow.images} 
          alt={context.productToShow.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
        {/* <span className='font-medium text-mb'>{context.productToShow.category.name}</span> */}
        <span className='font-medium text-mb'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail


