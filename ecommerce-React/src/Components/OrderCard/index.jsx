import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
  const { id, title, price, imageUrl, listenDelete } = props
  
  let renderXmarkIcon
  if(listenDelete) {
    renderXmarkIcon = <XMarkIcon 
      onClick={() => listenDelete(id)}
      className='h-6 w-6 text-black cursor-pointer'
    />
  }
  
  return (
    <div className='flex justify-between items-center mb-4'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover' 
            src={imageUrl} 
            alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        {renderXmarkIcon}
      </div>
    </div>
  )
}

export default OrderCard