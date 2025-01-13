import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'

const Cart = () => {
  // predefined method to navigate page
 const navigate =useNavigate()

  // access state
  const userCart = useSelector(state=>state.cartReducer)

  // create a state to hold total price
  const [cartTotal, setCartTotal] = useState(0)
  const dispatch = useDispatch()

  // to decrease quantity
  const handleQuantity =(product)=>{
    if(product?.quantity>1){
      dispatch(decrementQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  // function to checkout
  const checkOut =()=>{
    dispatch(emptyCart())
    alert("Order confirmed... Thankyou for purchasing with us...")
    // redirect to home page
    navigate('/')
  }

  // 
  useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal(userCart.map(item=>item.totalPrice).reduce((a1,a2)=>a1+a2))
    }
  },[userCart])

  return (
    <>
    <Header />
    <div style={{paddingTop:'100px'}} className='px-5'>
     {
     userCart?.length>0 ? 
      <> 
       <h1 className='text-4xl font-bold text-blue-600'>Cart Summary</h1>

       <div className='grid grid-cols-3 gap-4 mt-5'>
        {/* to join 2 division together */}
        <div className='col-span-2 border rounded p-5 shadow'> 
           <table className='table-auto w-full'>
             <thead>
              <tr>
                {/* th leads error so use td */}
                <td className='font-semibold'>#</td>
                <td className='font-semibold'>Name</td>
                <td className='font-semibold'>Image</td>
                <td className='font-semibold'>Quantity</td>
                <td className='font-semibold'>Price</td>
                <td className='font-semibold'>... </td>
              </tr>
             </thead>
             <tbody>
           {
            userCart?.map((product, index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{product?.title}</td>
              <td><img src={product?.thumbnail} width={'50px'} height={'50px'} alt="" /></td>
              <td>
                <div className='flex'>
                   <button onClick={()=>handleQuantity(product)} className='font-bold'>-</button>
                   <input style={{width:'40px', textAlign:'center'}} className='border p-1 rounded mx-2' value={product?.quantity} type="text" readOnly />
                   <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='font-bold'>+</button>
                </div>
              </td>
              <td>$ {product?.totalPrice}</td>
              <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-600'><i class="fa-regular fa-trash-can"></i></button></td>
            </tr>
            ))
           }
           </tbody>
           </table>

           <div className='float-right mt-5'>
             <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded p-2 text-white'>Empty Cart</button>
             <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop more...</Link>
           </div>
           
        </div>

        <div className='col-span-1'>
           <div className='border rounded shadow p-5'>
              <h2 className='text-2xl font-bold my-4'>Total Amount : <span className='text-red-600'>$ {cartTotal}</span></h2>
              <hr />
              <button onClick={checkOut} className='bg-green-600 rounded p-2 text-white w-full mt-4'>Chech Out</button>
           </div>
        </div>

       </div>
       </>
    :
      <div className='flex justify-center items-center h-screen'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1FXN98_FMbNOvDn4XaRgQQEVKtTTc-IER8g&s" alt="" />
          <h1 className='text-3xl text-red-600'>Your cart is empty!!!</h1>
      </div>
      }

    </div>
    </>
  )
}

export default Cart