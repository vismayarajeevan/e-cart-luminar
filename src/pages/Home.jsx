import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {

  

  const dispatch = useDispatch()

  const {allProducts, loading, errorMsg} =useSelector(state =>state.productReducer)
  console.log(allProducts, loading, errorMsg);


  //********** */ pagination*****************
  // create a state to hold current page
  const [currentPage, setCurrentPage] =useState(1)

  // create a variable to store how many items should show in one page
  const productPerPage =8
  // find total page
  const totalPage = Math.ceil(allProducts?.length/productPerPage)

  // *******to show pagination*************
  // find last index of current page
  const currentPageProductLastIndex = currentPage * productPerPage
  // find first index of currentpage
  const currentPageProductFirstIndex = currentPageProductLastIndex - productPerPage

  // find which variables to visible
  const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex, currentPageProductLastIndex)
  

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])


// function to navigate page for pagination
// forward
const navigateToNextPage =()=>{
  if(currentPage != totalPage){
    setCurrentPage(currentPage+1)
  }
}

// backward
const navigateToPrevPage =()=>{
  if(currentPage != 1){
    setCurrentPage(currentPage-1)
  }
}



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
      visibleAllProducts?.map((product)=>(
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

       {/* pagination */}
       <div className='text-2xl text-center font-bold mt-20 '>
        <span onClick={navigateToPrevPage} className='cursor-pointer'><i class="fa-solid fa-backward me-5"></i></span>
        <span>{currentPage} of {totalPage}</span>
        <span onClick={navigateToNextPage} className='cursor-pointer'><i class="fa-solid fa-forward ms-5"></i></span>
       </div>
     </>
     }
    </div>
    </>
  )
}

export default Home