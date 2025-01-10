import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {

  // action and selector for wishlist
  const dispatch =useDispatch()
  const userWishlist =useSelector(state=>state.wishlistReducer)

  // access state for cart
  const userCart = useSelector(state=>state.cartReducer)

  // state to show details
  const [product , setProduct] = useState({})
  // to take data through id
  const {id} = useParams()
  console.log(id);

  console.log(product);
  

 

  // need to load at page load time
  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts =JSON.parse(sessionStorage.getItem("allProducts"))
       // to take the corresponding id details
      console.log(allProducts.find(item=>item.id == id));
      // update state
      setProduct(allProducts.find(item=>item.id == id))
    }
   

   
  },[])
  

const handleWishlist =()=>{
  // check is it already in wishlist or not
  const existingProduct = userWishlist?.find(item=>item?.id == id)
  if(existingProduct){
    alert("Product already in your wishlist!!")
  }else{
    dispatch(addToWishlist(product))
  }

}

// function to add cart while click the button
const handleCart =()=>{
  // action will dispatch at the time of button click
  dispatch(addToCart(product))
  // check is it already in wishlist or not
  const existingProduct = userCart?.find(item=>item?.id == id)
  if(existingProduct){
    alert("Product quantity is incrementing!!")
  }else{
    alert("Product added to cart")
  }

}
  
  return (
    <>

    <Header />
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2  items-center h-screen'>
       <div>
         <img src={product?.thumbnail}  width={'400px'} height={'200px'} alt="" />
         <div className='flex justify-between mt-5'>
              <button onClick={handleWishlist} className='bg-blue-600 text-white p-2 rounded'>Add to Wishlist</button>
              <button onClick={handleCart} className='bg-green-600 text-white p-2 rounded'>Add to Cart</button>
            </div>
       </div>
       <div>
        <h3 className='font-bold'>PID:{product?.id}</h3>
        <h1 className='text-4xl font-bold'>{product?.title}</h1>
        <h4 className='font-bold text-red-600 text-2xl'>$ {product?.price}</h4>
        <h4>Brand: {product?.brand}</h4>
        <h4>Category: {product?.category}</h4>
        <p>
          <span>Description :</span>{product?.description}
        
        </p>
        {/* to showreviews */}
        <h3 className='font-bold mt-3'>Client Reviews</h3>
        {
          product?.reviews?.length>0?
           product?.reviews?.map(item=>(
            <div key={item?.date} className='shadow-border p-2 mb-2'>
              <h5>
                <span className='font-bold'>{item?.reviewerName}</span> : <span>{item?.comment}</span>
              </h5>
              <p>Rating: {item?.rating} <i class="fa-solid fa-star text-yellow-400" ></i> </p>
            </div>
           ))
          :
          <div>No reviews yet!!</div>
        }

       </div>
      </div>
      
    </div>
    </>
  )
}

export default View