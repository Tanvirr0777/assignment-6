import React from 'react';
import { AiFillProduct } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { IoRocketOutline } from 'react-icons/io5';

const Step = () => {
    return (
        <div className='my-7 text-center space-y-5 mt-15'>
               <h1 className='text-5xl font-bold'>Get Started in 3 steps</h1>

               <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>

               <div className='flex justify-between gap-4 text-center'>

                    <div className='border rounded-xl space-y-4 p-4 relative'>
                        <div className='w-[25%] mx-auto p-2 rounded-full bg-gray-200 mt-10'>
                            <CiUser className='text-purple-600 w-20' />
                        </div>
                        <h2 className='text-xl font-bold'>Create Account</h2>
                        <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>

                      <div className='bg-purple-500 w-8 absolute top-5 left-85 
                      rounded-full text-white'>
                          1
                      </div>
                   
                    </div>

                    <div className='border rounded-xl space-y-4 p-4 relative'>
                        <div className='w-[25%] mx-auto p-2 rounded-full bg-gray-200 mt-10'>
                            <AiFillProduct className='text-purple-600 w-20'  />
                        </div>
                        <h2 className='text-xl font-bold'>Choose Products</h2>
                        <p className='text-gray-500'>Browse our catalog and select the toolsthat fit your needs.</p>

                        <div className='bg-purple-500 w-8 absolute top-5 left-80 
                      rounded-full text-white'>
                          2
                      </div>
                    </div>
                    

                 <div className='border rounded-xl space-y-4 p-4 relative '>
                     <div className='w-[25%] mx-auto p-2 rounded-full bg-gray-200 mt-10'>
                        <IoRocketOutline className='text-purple-600 w-20' />
                     </div>
                     <h2 className='text-xl font-bold'>Start Creating</h2>
                     <p className='text-gray-500'>Download and start using your premium tools immediately.</p>
                
                   <div className='bg-purple-500 w-8 absolute top-5 left-80
                      rounded-full text-white'>
                          3
                      </div>
                
                 </div>

               </div>
        </div>
    );
};

export default Step;