import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
    <Header />
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2  items-center h-screen'>
       <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"  width={'400px'} height={'200px'} alt="" />
       <div>
        <h3 className='font-bold'>PID:id</h3>
        <h1 className='text-4xl font-bold'>Product name</h1>
        <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
        <h4>Brand: brand</h4>
        <h4>Category: category</h4>
        <p>
          <span>Description :</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quasi explicabo dolorum cupiditate corporis, neque doloremque nam accusantium temporibus, numquam qui recusandae labore deleniti nulla vitae dolores soluta, incidunt non!
          <div className='flex justify-between mt-5'>
            <button className='bg-blue-600 text-white p-2 rounded'>Add to Wishlist</button>
            <button className='bg-green-600 text-white p-2 rounded'>Add to Cart</button>
          </div>
        </p>
       </div>
      </div>
      
    </div>
    </>
  )
}

export default View