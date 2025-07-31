import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";


const Navbar = () => {


  return (
    <>
    <nav className='flex justify-between items-center lg:p-4 bg-black sticky shadow-md p-4 top-0 z-50'>
      <Link to="/products"  className="text-white text-xl border p-2 uppercase rounded transition-all duration-500 ease-in-out hover:text-black hover:bg-white hover:border-white ">
      Shopmate
      </Link>

      <ul className=' flex gap-3 '>
        <Link to="/" className='text-white  hover:text-blue-500 transition-all duration-500 ease-in-out'>HOME</Link>
        <Link to="/products" className='text-white hover:text-blue-500 transition-all duration-500 ease-in-out'>PRUDUCTS</Link>
       
        <Link to="/checkout" className='text-white hover:text-blue-500 transition-all duration-500 ease-in-out'>CHECKOUT</Link>
        <Link to="/about" className='text-white hover:text-blue-500 transition-all duration-500 ease-in-out'>ABOUT</Link>

      </ul>

      <div>
        <button className='text-white hover:text-emerald-400 transition duration-300'>
            <FaSearch size={18} />
          </button>
      </div>


      <div className='flex gap-3'>
        <Link to="/login" className='text-white text-sm uppercase border-1 p-2 rounded-xl hover:bg-emerald-500 transition-all duration-500 ease-in-out'>Login</Link>
        <Link to="/register" className='text-white text-sm uppercase border-1 p-2 rounded-xl hover:bg-emerald-500 transition-all duration-500 ease-in-out'>Register</Link>

      </div>

    </nav>


    </>
  )
}

export default Navbar