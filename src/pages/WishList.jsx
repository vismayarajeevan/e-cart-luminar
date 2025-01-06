import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


const WishList = () => {
  return (
    <>
      <Header />
      <div style={{paddingTop:'100px'}} className='px-5'>
        <>
        <h1 className='text-4xl font-bold text-red-600 mb-5'>My Wishlist</h1>
        <div className='grid grid-cols-4 gap-4'>
         <div className='rounded border p-2 shadow'>
           <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" width={'100%'} height={'200px'} alt="" />
           <div className='text-center'>
            <h3>Product name</h3>
           <div className='flex justify-evenly mt-3'>
            <button className='text-xl'><i class="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
            <button className='text-xl'><i class="fa-solid fa-cart-plus text-green-700"></i></button>
           </div>
           </div>
         </div>
      </div>
        </>
      </div>
    </>
  )
}

export default WishList