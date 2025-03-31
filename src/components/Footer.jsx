// import React from 'react'
// import { Link } from 'react-router-dom'


// const Footer = () => {

//   return (
    
//  <div style={{height:'250px', marginTop:'100px'}} className='mt-5  w-full bg-violet-600 text-white p-3'>

//    <div className='flex justify-between p-4'>

//     {/* ********************1.intro****************** */}
//      <div style={{width:"400px"}} className='intro'>
//       <h5 className='text-xl font-bold mb-3'><i class="fa-solid fa-truck-fast"></i>E Cart</h5>
//       <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
//       <p>Code licensed MIT, docs CC BY 3.0.</p>
//       <p>Currently v5.3.3.</p>
//      </div>


//   {/* ************2.links*************** */}
//   <div className='flex flex-col'>
//     <h5 className='text-xl font-bold mb-3'>Links</h5>
//     <Link to={'/'} style={{textDecoration:'none', color:'white'}} >Landing Page</Link>
//     <Link to={'/home'} style={{textDecoration:'none', color:'white'}} >Home Page</Link>
//     <Link to={'/history'} style={{textDecoration:'none', color:'white'}} >Watch History Page</Link>   
//   </div>

//   {/* **************3.guides*********** */}

// <div className='flex flex-col'>
//   {/* it moves to external pages , so use anchor tag */}
//   <h5 className='text-xl font-bold mb-3'>Guides</h5>
//   <a href="https://react.dev/" target='_blank' style={{textDecoration:"none", color:"white"}}>React</a>
//   <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{textDecoration:"none", color:"white"}}>React Bootstrap</a>
//   <a href="https://reactrouter.com/" target='_blank' style={{textDecoration:"none", color:"white"}}>React Router</a>

// </div>

//   {/* **************4.contacts*********** */}

//   <div className='flex flex-col'>

//     <h5 className='text-xl font-bold mb-3'>Contacts</h5>
//     <div className='flex'>
//       <input type="text" placeholder='Enter your email here..' className='form-control me-2 p-2 rounded' />
//       <button className='btn btn-violet-600'><i class="fa-solid fa-arrow-right"></i></button>
//     </div>

//     <div className='flex justify-between mt-3'>
//       <a href="https://x.com/?lang=en&mx=2" target='_blank' style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-twitter"></i></a>
//       <a href="https://www.instagram.com/" target='_blank' style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-instagram"></i></a>
//       <a href="https://www.facebook.com/" target='_blank' style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-facebook"></i></a>
//       <a href="https://in.linkedin.com/" target='_blank' style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-linkedin"></i></a>
//       <a href="https://github.com/" target='_blank' style={{textDecoration:"none", color:"white"}}><i class="fa-brands fa-github"></i></a>
//       <a href="https://github.com/" target='_blank' style={{textDecoration:"none", color:"white"}}><i class="fa-solid fa-phone"></i></a>
//     </div>

//   </div>
// </div>

// <p className='text-center mt-3'>Copyright &copy; May 2024 Batch, Media Player. Built with React.</p>
// </div>

   
//   )
// }

// export default Footer


import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Github, 
  Phone,
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Truck className="h-6 w-6" />
              <h5 className="text-xl font-bold">ShopEase</h5>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Designed and built with all the love in the world by our team with the
              help of our contributors.
            </p>
            <p className="text-white/80 text-sm mt-4">
              Code licensed MIT, docs CC BY 3.0.
              <br />
              Currently v5.3.3.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-bold mb-6">Quick Links</h5>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-white/80 hover:text-white transition">
                Landing Page
              </Link>
              <Link to="/home" className="text-white/80 hover:text-white transition">
                Home
              </Link>
              <Link to="/history" className="text-white/80 hover:text-white transition">
                Order History
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-xl font-bold mb-6">Resources</h5>
            <div className="flex flex-col space-y-3">
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition"
              >
                React
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition"
              >
                Tailwind CSS
              </a>
              <a
                href="https://reactrouter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition"
              >
                React Router
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-xl font-bold mb-6">Stay Updated</h5>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-4 py-2 bg-white text-blue-800 rounded-r-lg hover:bg-white/90 transition">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6">
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition">
                  <Github className="h-5 w-5" />
                </a>
                <a href="tel:+1234567890" className="text-white/80 hover:text-white transition">
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/80 text-sm">
            &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;