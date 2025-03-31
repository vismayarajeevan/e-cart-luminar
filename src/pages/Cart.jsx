// import React, { useEffect, useState } from 'react'
// import Header from '../components/Header'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'

// const Cart = () => {
//   // predefined method to navigate page
//  const navigate =useNavigate()

//   // access state
//   const userCart = useSelector(state=>state.cartReducer)

//   // create a state to hold total price
//   const [cartTotal, setCartTotal] = useState(0)
//   const dispatch = useDispatch()

//   // to decrease quantity
//   const handleQuantity =(product)=>{
//     if(product?.quantity>1){
//       dispatch(decrementQuantity(product.id))
//     }else{
//       dispatch(removeCartItem(product.id))
//     }
//   }

//   // function to checkout
//   const checkOut =()=>{
//     dispatch(emptyCart())
//     alert("Order confirmed... Thankyou for purchasing with us...")
//     // redirect to home page
//     navigate('/')
//   }

//   // 
//   useEffect(()=>{
//     if(userCart?.length>0){
//       setCartTotal(userCart.map(item=>item.totalPrice).reduce((a1,a2)=>a1+a2))
//     }
//   },[userCart])

//   return (
//     <>
//     <Header />
//     <div style={{paddingTop:'100px'}} className='px-5'>
//      {
//      userCart?.length>0 ? 
//       <> 
//        <h1 className='text-4xl font-bold text-blue-600'>Cart Summary</h1>

//        <div className='grid grid-cols-3 gap-4 mt-5'>
//         {/* to join 2 division together */}
//         <div className='col-span-2 border rounded p-5 shadow'> 
//            <table className='table-auto w-full'>
//              <thead>
//               <tr>
//                 {/* th leads error so use td */}
//                 <td className='font-semibold'>#</td>
//                 <td className='font-semibold'>Name</td>
//                 <td className='font-semibold'>Image</td>
//                 <td className='font-semibold'>Quantity</td>
//                 <td className='font-semibold'>Price</td>
//                 <td className='font-semibold'>... </td>
//               </tr>
//              </thead>
//              <tbody>
//            {
//             userCart?.map((product, index)=>(
//               <tr>
//               <td>{index+1}</td>
//               <td>{product?.title}</td>
//               <td><img src={product?.thumbnail} width={'50px'} height={'50px'} alt="" /></td>
//               <td>
//                 <div className='flex'>
//                    <button onClick={()=>handleQuantity(product)} className='font-bold'>-</button>
//                    <input style={{width:'40px', textAlign:'center'}} className='border p-1 rounded mx-2' value={product?.quantity} type="text" readOnly />
//                    <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='font-bold'>+</button>
//                 </div>
//               </td>
//               <td>$ {product?.totalPrice}</td>
//               <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-600'><i class="fa-regular fa-trash-can"></i></button></td>
//             </tr>
//             ))
//            }
//            </tbody>
//            </table>

//            <div className='float-right mt-5'>
//              <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded p-2 text-white'>Empty Cart</button>
//              <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop more...</Link>
//            </div>
           
//         </div>

//         <div className='col-span-1'>
//            <div className='border rounded shadow p-5'>
//               <h2 className='text-2xl font-bold my-4'>Total Amount : <span className='text-red-600'>$ {cartTotal}</span></h2>
//               <hr />
//               <button onClick={checkOut} className='bg-green-600 rounded p-2 text-white w-full mt-4'>Chech Out</button>
//            </div>
//         </div>

//        </div>
//        </>
//     :
//       <div className='flex justify-center items-center h-screen'>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1FXN98_FMbNOvDn4XaRgQQEVKtTTc-IER8g&s" alt="" />
//           <h1 className='text-3xl text-red-600'>Your cart is empty!!!</h1>
//       </div>
//       }

//     </div>
//     </>
//   )
// }

// export default Cart


import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementQuantity,
  emptyCart,
  incrementQuantity,
  removeCartItem,
} from '../redux/slices/cartSlice';
import { ShoppingBag, Minus, Plus, Trash2, RefreshCcw, CreditCard } from 'lucide-react';
import Header from '../components/Header';


const Cart = () => {
  const navigate = useNavigate();
  const userCart = useSelector(state => state.cartReducer);
  const [cartTotal, setCartTotal] = useState(0);
  const dispatch = useDispatch();

  const handleQuantity = (product) => {
    if (product?.quantity > 1) {
      dispatch(decrementQuantity(product.id));
    } else {
      dispatch(removeCartItem(product.id));
    }
  };

  const checkOut = () => {
    dispatch(emptyCart());
    alert("Order confirmed... Thank you for purchasing with us!");
    navigate('/');
  };

  useEffect(() => {
    if (userCart?.length > 0) {
      setCartTotal(userCart.map(item => item.totalPrice).reduce((a1, a2) => a1 + a2));
    }
  }, [userCart]);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {userCart?.length > 0 ? (
          <>
            <div className="flex items-center gap-3 mb-8">
              <ShoppingBag className="h-8 w-8 text-blue-800" />
              <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {userCart?.map((product) => (
                          <tr key={product?.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full object-cover"
                                    src={product?.thumbnail}
                                    alt={product?.title}
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {product?.title}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleQuantity(product)}
                                  className="p-1 rounded-full hover:bg-gray-100"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-8 text-center">{product?.quantity}</span>
                                <button
                                  onClick={() => dispatch(incrementQuantity(product?.id))}
                                  className="p-1 rounded-full hover:bg-gray-100"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">${product?.totalPrice}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() => dispatch(removeCartItem(product?.id))}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => dispatch(emptyCart())}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
                      >
                        <RefreshCcw className="h-4 w-4 mr-2" />
                        Empty Cart
                      </button>
                      <Link
                        to="/"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                      >
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                  <div className="flow-root">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Total</p>
                      <p>${cartTotal}</p>
                    </div>
                  </div>
                  <button
                    onClick={checkOut}
                    className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-800 to-indigo-900 hover:from-blue-900 hover:to-indigo-950"
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <ShoppingBag className="h-24 w-24 text-gray-300 mb-6" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add items to your cart to checkout</p>
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

export default Cart;