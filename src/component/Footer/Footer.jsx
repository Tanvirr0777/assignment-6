import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className=''>
            
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 ">

        <div className="grid grid-cols-2 gap-10 lg:grid-cols-15">
            
         
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                DigiTools
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators, <br /> 
              professionals, and businesses. Work smarter <br />
              with our suite of powerful tools.
            </p>
 
          </div>

         
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Template
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integration
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                   Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                   Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className=" text-zinc-400 flex gap-4">
              <li className='border bg-white rounded-full p-1 text-black'>
                <a href="#">
                   <FaInstagram />
                </a>
              </li>
              <li className='border bg-white rounded-full p-1 text-black'>
                <a href="#">
                   <FaFacebook />
                </a>
              </li>
              <li className='border bg-white rounded-full p-1 text-black'>
                <a href="#">
                    <FaXTwitter />
                </a>
              </li>

            </ul>
          </div>

        </div>

       
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} AI Hub. All rights reserved.</div>

          <div className="flex gap-6">
            <div> 
                <a href="#" className="">
                     Privacy Policy
                </a>
          </div>
            <div> 
                <a href="#" className="">
                     Terms of service
                </a>
          </div>
            <div> 
                <a href="#" className="">
                     Cookies
                </a>
          </div>

          </div>

        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;