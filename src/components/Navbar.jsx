import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const product = [
  {id: 1, Name: "iPhone 14 Pro"},
  {id: 2, Name: "Samsung Galaxy s24"},
  {id: 3, Name: "AirPods Pro"},
  {id: 4, Name: "Sony WH-1000XMS"},
  {id: 5, Name: "MacBook Air M2"},
  {id: 6, Name: "Ipad"}
];

const categories = ["Phone", "Laptops", "Headphones", "Tablets"];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProducts = product.filter(product =>
    product.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className='flex flex-col lg:flex-row justify-between items-center bg-black shadow-md p-4 sticky top-0 z-50'>
      {/* Logo */}
      <div className="flex w-full justify-between items-center lg:w-auto">
        <Link
          to="/products"
          className="text-white text-xl border p-2 uppercase rounded hover:text-black hover:bg-white transition-all duration-300"
        >
          Shopmate
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="lg:hidden text-white text-2xl ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`flex-col lg:flex-row flex gap-4 mt-4 lg:mt-0 items-center
        ${mobileMenuOpen ? 'flex' : 'hidden'} lg:flex bg-black lg:bg-transparent w-full lg:w-auto p-4 lg:p-0 absolute lg:static top-full left-0 lg:top-auto lg:left-auto z-40 transition-all`}
      >
        <li>
          <Link to="/" className='text-white hover:text-blue-500 transition'>HOME</Link>
        </li>
        <li>
          <Link to="/products" className='text-white hover:text-blue-500 transition'>PRODUCTS</Link>
        </li>
        <li>
          <Link to="/checkout" className='text-white hover:text-blue-500 transition'>CHECKOUT</Link>
        </li>
        <li>
          <Link to="/about" className='text-white hover:text-blue-500 transition'>ABOUT</Link>
        </li>
        <li>
          {/* Dropdown - Categories */}
          <div
            className='relative group'
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className='text-white hover:text-blue-500 transition'>CATEGORIES</button>
            {isDropdownOpen && (
              <ul className='absolute top-full left-0 bg-white text-black shadow-md rounded w-40'>
                {categories.map((category, idx) => (
                  <li key={idx} className='px-3 py-2 hover:bg-amber-100 cursor-pointer'>
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
        {/* Auth Buttons for mobile */}
        <li className="flex gap-3 lg:hidden mt-4">
          <Link to="/login" className='text-white text-sm uppercase border p-2 rounded-xl hover:bg-emerald-500 transition'>Login</Link>
          <Link to="/register" className='text-white text-sm uppercase border p-2 rounded-xl hover:bg-emerald-500 transition'>Register</Link>
        </li>
      </ul>

      {/* Search */}
      <div className='relative mt-4 md:mt-0 lg:ml-4 w-full lg:w-auto'>
        <div className='flex items-center gap-2 bg-white rounded-2xl px-2 py-3'>
          <input
            type='text'
            placeholder='Search products ..'
            className='text-gray-800 outline-none text-sm w-full'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch size={18} className='text-gray-800 '/>
        </div>
        {/* Filtered product Dropdown */}
        {searchTerm && (
          <ul className='absolute bg-white shadow-lg rounded mt-1 w-full max-h-40 overflow-y-auto z-50'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <li
                  key={product.id}
                  className='px-3 py-1 text-sm hover:bg-amber-100 cursor-pointer'
                >
                  {product.Name}
                </li>
              ))
            ) : (
              <li className='px-3 py-2 hover:text-gray-400'>No products found</li>
            )}
          </ul>
        )}
      </div>

      {/* Auth Buttons for desktop */}
      <div className='gap-3 mt-4 lg:mt-0 hidden lg:flex'>
        <Link to="/login" className='text-white text-sm uppercase border p-2 rounded-xl hover:bg-emerald-500 transition'>Login</Link>
        <Link to="/register" className='text-white text-sm uppercase border p-2 rounded-xl hover:bg-emerald-500 transition'>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
