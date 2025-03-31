// import React, { useEffect, useState } from 'react'
// import Header from '../components/Header'
// import { useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { addToWishlist } from '../redux/slices/wishlistSlice'
// import { addToCart } from '../redux/slices/cartSlice'

// const View = () => {

//   // action and selector for wishlist
//   const dispatch =useDispatch()
//   const userWishlist =useSelector(state=>state.wishlistReducer)

//   // access state for cart
//   const userCart = useSelector(state=>state.cartReducer)

//   // state to show details
//   const [product , setProduct] = useState({})
//   // to take data through id
//   const {id} = useParams()
//   console.log(id);

//   console.log(product);
  

 

//   // need to load at page load time
//   useEffect(()=>{
//     if(sessionStorage.getItem("allProducts")){
//       const allProducts =JSON.parse(sessionStorage.getItem("allProducts"))
//        // to take the corresponding id details
//       console.log(allProducts.find(item=>item.id == id));
//       // update state
//       setProduct(allProducts.find(item=>item.id == id))
//     }
   

   
//   },[])
  

// const handleWishlist =()=>{
//   // check is it already in wishlist or not
//   const existingProduct = userWishlist?.find(item=>item?.id == id)
//   if(existingProduct){
//     alert("Product already in your wishlist!!")
//   }else{
//     dispatch(addToWishlist(product))
//   }

// }

// // function to add cart while click the button
// const handleCart =()=>{
//   // action will dispatch at the time of button click
//   dispatch(addToCart(product))
//   // check is it already in wishlist or not
//   const existingProduct = userCart?.find(item=>item?.id == id)
//   if(existingProduct){
//     alert("Product quantity is incrementing!!")
//   }else{
//     alert("Product added to cart")
//   }

// }
  
//   return (
//     <>

//     <Header />
//     <div className='flex flex-col mx-5'>
//       <div className='grid grid-cols-2  items-center h-screen'>
//        <div>
//          <img src={product?.thumbnail}  width={'400px'} height={'200px'} alt="" />
//          <div className='flex justify-between mt-5'>
//               <button onClick={handleWishlist} className='bg-blue-600 text-white p-2 rounded'>Add to Wishlist</button>
//               <button onClick={handleCart} className='bg-green-600 text-white p-2 rounded'>Add to Cart</button>
//             </div>
//        </div>
//        <div>
//         <h3 className='font-bold'>PID:{product?.id}</h3>
//         <h1 className='text-4xl font-bold'>{product?.title}</h1>
//         <h4 className='font-bold text-red-600 text-2xl'>$ {product?.price}</h4>
//         <h4>Brand: {product?.brand}</h4>
//         <h4>Category: {product?.category}</h4>
//         <p>
//           <span>Description :</span>{product?.description}
        
//         </p>
//         {/* to showreviews */}
//         <h3 className='font-bold mt-3'>Client Reviews</h3>
//         {
//           product?.reviews?.length>0?
//            product?.reviews?.map(item=>(
//             <div key={item?.date} className='shadow-border p-2 mb-2'>
//               <h5>
//                 <span className='font-bold'>{item?.reviewerName}</span> : <span>{item?.comment}</span>
//               </h5>
//               <p>Rating: {item?.rating} <i class="fa-solid fa-star text-yellow-400" ></i> </p>
//             </div>
//            ))
//           :
//           <div>No reviews yet!!</div>
//         }

//        </div>
//       </div>
      
//     </div>
//     </>
//   )
// }

// export default View


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import Header from '../components/Header';


const View = () => {
  const dispatch = useDispatch();
  const userWishlist = useSelector((state) => state.wishlistReducer);
  const userCart = useSelector((state) => state.cartReducer);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (sessionStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"));
      setProduct(allProducts.find(item => item.id == id));
    }
  }, []);

  const handleWishlist = () => {
    const existingProduct = userWishlist?.find(item => item?.id == id);
    if (existingProduct) {
      alert("Product already in your wishlist!");
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleCart = () => {
    dispatch(addToCart(product));
    const existingProduct = userCart?.find(item => item?.id == id);
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start py-8">
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={product?.thumbnail}
                alt={product?.title}
                className="w-full h-[400px] object-cover object-center"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleWishlist}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-3 px-4 rounded-lg hover:from-blue-900 hover:to-indigo-950 transition-colors"
              >
                <Heart className="h-5 w-5" />
                Add to Wishlist
              </button>
              <button
                onClick={handleCart}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">Product ID: {product?.id}</p>
              <h1 className="text-3xl font-bold text-gray-900 mt-1">{product?.title}</h1>
              <p className="text-2xl font-bold text-blue-800 mt-2">${product?.price}</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600">Brand: <span className="font-medium text-gray-900">{product?.brand}</span></p>
              <p className="text-sm text-gray-600">Category: <span className="font-medium text-gray-900">{product?.category}</span></p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-gray-600">{product?.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Reviews</h3>
              {product?.reviews?.length > 0 ? (
                <div className="space-y-4">
                  {product?.reviews?.map(review => (
                    <div key={review?.date} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{review?.reviewerName}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">{review?.rating}</span>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-600">{review?.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No reviews yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;