import { useRoutes, BrowserRouter } from 'react-router-dom'

//Components
import Home from '../Pages/Home'
import MyAccount from '../Pages/MyAccount'
import MyOrders from '../Pages/MyOrders'
import MyOrder from '../Pages/MyOrder'
import NotFound from '../Pages/NotFound'
import Signin from '../Pages/Signin'
import NavBar from '../Components/NavBar'
import CheckoutSideMenu from '../Components/CheckoutSideMenu'
import { EcommerceCartContextProvider } from '../Context'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/signin', element: <Signin /> },
  ])
  return routes
}

const Index = () => {
  return (
    <>
      <EcommerceCartContextProvider>
        <BrowserRouter>
          <AppRoutes />
          <NavBar />
          <CheckoutSideMenu />
        </BrowserRouter>
      </EcommerceCartContextProvider>
    </>
  )
}

export default Index