import { NavLink } from "react-router-dom";
import { useContext } from 'react'
import { ecommerceCartContext } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const NavBar = () => {
  const activeStyle = 'underline underline-offset-4'
  const context = useContext(ecommerceCartContext)

  return (
    <nav className='flex justify-between items-center py-5 px-8 text-sm fixed z10 w-full top-0'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/'
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='font-light'>
          tiago@XXXXXXXXX
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            my-orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            my-account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signin'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            sign-in
          </NavLink>
        </li>
        <li className="flex">
          <ShoppingCartIcon className='h-6 w-6 text-black' />
          <div>{context.count}</div> 
        </li>
      </ul>
    </nav>
  )
}

export default NavBar