import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WishList from './pages/WishList'
import Cart from './pages/Cart'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
import View from './pages/View'
import Auth from './pages/Auth'


function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Auth />} />

      <Route path='/wishlist' element={<WishList />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/:id/view' element={<View />} />
      <Route path='/*' element={<Pnf />} />
    </Routes>

    {/* footer */}
    {location.pathname !== "/login" && <Footer />}
      
    </>
  )
}

export default App
