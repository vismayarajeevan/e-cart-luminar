import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {

  const dispatch = useDispatch()

  const {allProducts, loading, errorMsg} =useSelector(state =>state.productReducer)
  console.log(allProducts, loading, errorMsg);
  

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <>
    <Header insideHome={true} />
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
     {
      loading ?
      <div className='flex justify-center items-center my-5 text-large'>
           <img width={'600px'} height={'600px'} src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_medium.gif" alt="" />
           Loading....
      </div>
      :
     <>
        <div className='grid grid-cols-4 gap-4'>
     {
      allProducts?.length>0 ?
      allProducts?.map((product)=>(
        <div key={product?.id} className='rounded border p-2 shadow'>
        <img src={product?.thumbnail} width={'100%'} height={'200px'} alt="" />
        <div className='text-center'>
         <h3>{product?.title}</h3>
         <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More..</Link>
        </div>
      </div>
      ))
       
        :
        <div className='flex justify-center items-center font-bold my-5 text-red-600'>
          Products not found
        </div>
     }

       </div>
     </>
     }
    </div>
    </>
  )
}

export default Home