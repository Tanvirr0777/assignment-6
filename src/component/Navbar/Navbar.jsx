import React from 'react';
import Shopcart from '../Homepage/Shopcart';


const Navbar = ({carts}) => {

  
    return (
        <div className='sticky top-0 bg-white'>
               <div className="navbar mb-5">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
                <h1 className='text-2xl bg-linear-to-r from-blue-500 to-purple-600 
                    bg-clip-text text-transparent'>
                DigiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-5">
        
         <div className='relative'>
             <img className='w-6' src="/src/assets/shopping-cart.png" alt="shopping_cart" />

             <div className='bg-red-500 text-white rounded-full w-6
                             absolute -top-4 left-3
                 '>
                 <p className='text-center'>{carts.length}</p>
             </div>
         </div>
          
          <div>Login</div>
          
          <div>
            <a className="btn bg-linear-to-r from-blue-500 to-purple-600
             rounded-full text-white">
                Get Started</a>
         </div>
      </div>

    </div>
        </div>
    );
};

export default Navbar;