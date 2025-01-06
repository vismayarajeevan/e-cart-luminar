import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {

  return (
    
 <div style={{height:'250px', marginTop:'100px'}} className='mt-5  w-full bg-violet-600 text-white p-3'>

   <div className='flex justify-between p-4'>

    {/* ********************1.intro****************** */}
     <div style={{width:"400px"}} className='intro'>
      <h5 className='text-xl font-bold mb-3'><i class="fa-solid fa-truck-fast"></i>E Cart</h5>
      <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
      <p>Code licensed MIT, docs CC BY 3.0.</p>
      <p>Currently v5.3.3.</p>
     </div>


  {/* ************2.links*************** */}
  <div className='flex flex-col'>
    <h5 className='text-xl font-bold mb-3'>Links</h5>
    <Link to={'/'} style={{textDecoration:'none', color:'white'}} >Landing Page</Link>
    <Link to={'/home'} style={{textDecoration:'none', color:'white'}} >Home Page</Link>
    <Link to={'/history'} style={{textDecoration:'none', color:'white'}} >Watch History Page</Link>   
  </div>

  {/* **************3.guides*********** */}

<div className='flex flex-col'>
  {/* it moves to external pages , so use anchor tag */}
  <h5 className='text-xl font-bold mb-3'>Guides</h5>
  <a href="https://react.dev/" target='_blank' style={{textDecoration:"none", color:"white"}}>React</a>
  <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{textDecoration:"none", color:"white"}}>React Bootstrap</a>
  <a href="https://reactrouter.com/" target='_blank' style={{textDecoration:"none", color:"white"}}>React Router</a>

</div>

  {/* **************4.contacts*********** */}

  <div className='flex flex-col'>

    <h5 className='text-xl font-bold mb-3'>Contacts</h5>
    <div className='flex'>
      <input type="text" placeholder='Enter your email here..' className='form-control me-2 p-2 rounded' />
      <button className='btn btn-violet-600'><i class="fa-solid fa-arrow-right"></i></button>
    </div>

    <div className='flex justify-between mt-3'>
      <a href="https://x.com/?lang=en&mx=2" target='_blank' style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-twitter"></i></a>
      <a href="https://www.instagram.com/" target='_blank' style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.facebook.com/" target='_blank' style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-facebook"></i></a>
      <a href="https://in.linkedin.com/" target='_blank' style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://github.com/" target='_blank' style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-github"></i></a>
      <a href="https://github.com/" target='_blank' style={{textDecoration:"none", color:"white"}}><i class="fa-solid fa-phone"></i></a>
    </div>

  </div>
</div>

<p className='text-center mt-3'>Copyright &copy; May 2024 Batch, Media Player. Built with React.</p>
</div>

   
  )
}

export default Footer