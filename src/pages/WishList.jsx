


import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { Heart, ShoppingCart, ShoppingBag } from 'lucide-react';
import Header from '../components/Header';

const WishList = () => {
  const userWishlist = useSelector(state => state.wishlistReducer);
  const userCart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  const handleCart = (product) => {
    dispatch(removeItem(product.id));
    dispatch(addToCart(product));
    const existingProduct = userCart?.find(item => item?.id == product.id);
    if (existingProduct) {
      alert("Product quantity is incrementing!");
    } else {
      alert("Product added to cart");
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {userWishlist?.length > 0 ? (
          <>
            <div className="flex items-center gap-3 mb-8">
              <Heart className="h-8 w-8 text-blue-800" />
              <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {userWishlist?.map(product => (
                <div key={product?.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={product?.thumbnail}
                      alt={product?.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 truncate">
                      {product?.title}
                    </h3>
                    <div className="flex justify-between gap-4">
                      <button
                        onClick={() => dispatch(removeItem(product?.id))}
                        className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                        aria-label="Remove from wishlist"
                      >
                        <Heart className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleCart(product)}
                        className="flex-1 flex items-center justify-center gap-2 bg-green-100 text-green-600 py-2 px-3 rounded-lg hover:bg-green-200 transition-colors"
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <ShoppingBag className="h-24 w-24 text-gray-300 mb-6" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Add items that you like to your wishlist</p>
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-3 px-6 rounded-lg hover:from-blue-900 hover:to-indigo-950 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default WishList;