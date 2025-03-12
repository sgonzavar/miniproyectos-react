import { createContext, useState } from 'react'

export const ecommerceCartContext = createContext()

export const EcommerceCartContextProvider = ({ children }) => {
  // shoping cart / Increment quianity
  const [count, setCount] = useState(0)

  // product detail / open - close
  const [isProductDetailOpened, setIsProductDetailOpend] = useState(false)
  const openProductDetail = () => setIsProductDetailOpend(true)
  const closeProductDetail = () => setIsProductDetailOpend(false)

  // checkout detail / open - close
  const [isCheckoutSideMenuOpened, setIsCheckoutSideMenuOpend] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpend(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpend(false)
  
  // Product detail / show product
  const [productToShow, setProductToShow] = useState({})

  //Shoppin car / Add product to car
  const [carProduct, setCarProduct] = useState([])

  //shoping car / order
  const [order, setOrder] = useState([])


  return (
    <ecommerceCartContext.Provider value={{ 
      count, 
      setCount,
      isProductDetailOpened,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      carProduct,
      setCarProduct,
      isCheckoutSideMenuOpened,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder
      }}>
      {children}
    </ecommerceCartContext.Provider>
  )
}
