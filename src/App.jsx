import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'


function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/product/:id' element = {<ProductDetails/>}/>
      <Route path='/products' element = {<Products/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/checkout' element = {<Checkout/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/about' element = {<About/>}/>
      
    </Routes>
      
    </>
  )
}

export default App
