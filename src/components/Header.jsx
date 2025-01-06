import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({insideHome}) => {
  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
        <Link to={'/'} className='text-2xl font-bold'><i class="fa-solid fa-truck-fast me-2"></i>E Cart</Link>
        <ul className='flex-1 text-right'>
         { insideHome &&
           <li className='list-none inline-block px-5'><input style={{width:'300px'}} className='rounded p-2' type="text" placeholder='Search products here...' /></li>
         }
            <li className='list-none inline-block px-5'><Link to={'/wishlist'}><i class="fa-solid fa-heart text-red-600 me-2"></i>Wishlist <span className='bg-black text-white rounded p-1'>0</span></Link></li>
            <li className='list-none inline-block px-5'><Link to={'/cart'}><i class="fa-solid fa-cart-shopping me-2"></i>Cart <span className='bg-black text-white rounded p-1'>0</span></Link></li>
        </ul>
    </nav>
  )
}

export default Header