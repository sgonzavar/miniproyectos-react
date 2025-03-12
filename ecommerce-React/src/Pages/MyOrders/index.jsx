import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ecommerceCartContext } from '../../Context'
import Layout from "../../Layout"
import OrdersCard from '../../Components/OrdersCard'



const MyOrders = () => {
  const context = useContext(ecommerceCartContext)
  return (
    <Layout>
      <div className="flex justify-center w-80 relative items-center">
          <h2 className="font-medium text-xl mb-6">My Orders</h2>
      </div>
      {
        context.order.map((order, index) => (          
          <Link  key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders