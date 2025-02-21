import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const WishList = () => {



 const userWishlist = useSelector(state=>state.wishlistReducer)

//  to call action using usedispatch
const dispatch = useDispatch()

 // access state for cart
  const userCart = useSelector(state=>state.cartReducer)

  // function to add cart while click the button
  const handleCart =(product)=>{
    // to remove item from wishlist when it added to cart
    dispatch(removeItem(product.id))
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
      <div style={{paddingTop:'100px'}} className='px-5'>
       {
        userWishlist?.length>0 ?
        <>
        <h1 className='text-4xl font-bold text-red-600 mb-5'>My Wishlist</h1>
        <div className='grid grid-cols-4 gap-4'>
        
        {
          userWishlist?.map(product=>(
            <div className='rounded border p-2 shadow'>
            <img src={product?.thumbnail} width={'100%'} height={'200px'} alt="" />
            <div className='text-center'>
             <h3>{product?.title}</h3>
            <div className='flex justify-evenly mt-3'>
             <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
             <button onClick={()=>handleCart(product)} className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>
            </div>
            </div>
          </div>
          ))
        }
      </div>
        </>
        :
        <div className='flex justify-center items-center h-screen'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1FXN98_FMbNOvDn4XaRgQQEVKtTTc-IER8g&s" alt="" />
          <h1 className='text-3xl text-red-600'>Your wishlist is empty!!!</h1>
          </div>
       }
      </div>
    </>
  )
}

export default WishList