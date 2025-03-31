// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { searchProduct } from '../redux/slices/productSlice'

// const Header = ({insideHome}) => {

//   const dispatch=useDispatch()

//   // to access a state use the hook useselector
//   // to increase count
//   const userCart =useSelector(state=>state.cartReducer)

//   // to increase count of wish list
//   // access wishlist reducer from store
//   const userWishlist =useSelector(state=>state.wishlistReducer)
  
//   return (
//     <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
//         <Link to={'/'} className='text-2xl font-bold'><i class="fa-solid fa-truck-fast me-2"></i>E Cart</Link>
//         <ul className='flex-1 text-right'>
//          { insideHome &&
//            <li className='list-none inline-block px-5'><input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'300px'}} className='rounded p-2 text-black' type="text" placeholder='Search products here...' /></li>
//          }
//             <li className='list-none inline-block px-5'><Link to={'/wishlist'}><i class="fa-solid fa-heart text-red-600 me-2"></i>Wishlist <span className='bg-black text-white rounded p-1'>{userWishlist?.length}</span></Link></li>
//             <li className='list-none inline-block px-5'><Link to={'/cart'}><i class="fa-solid fa-cart-shopping me-2"></i>Cart <span className='bg-black text-white rounded p-1'>{userCart?.length}</span></Link></li>
//         </ul>
//     </nav>
//   )
// }

// export default Header


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../redux/slices/productSlice';
import { ShoppingCart, Heart, Truck, Search } from 'lucide-react';

const Header = ({ insideHome }) => {
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.cartReducer);
  const userWishlist = useSelector((state) => state.wishlistReducer);

  return (
    <nav className="fixed w-full bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">ShopEase</span>
          </Link>

          <div className="flex items-center space-x-4">
            {insideHome && (
              <div className="relative">
                <input
                  onChange={(e) =>
                    dispatch(searchProduct(e.target.value.toLowerCase()))
                  }
                  className="w-64 px-4 py-2 rounded-full bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  type="text"
                  placeholder="Search products..."
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-white/70" />
              </div>
            )}

            <Link
              to="/wishlist"
              className="flex items-center space-x-1 text-white hover:text-white/80 transition"
            >
              <Heart className="h-5 w-5" />
              <span>Wishlist</span>
              {userWishlist?.length > 0 && (
                <span className="ml-1 px-2 py-1 text-xs bg-white text-blue-800 rounded-full">
                  {userWishlist.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="flex items-center space-x-1 text-white hover:text-white/80 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {userCart?.length > 0 && (
                <span className="ml-1 px-2 py-1 text-xs bg-white text-blue-800 rounded-full">
                  {userCart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;