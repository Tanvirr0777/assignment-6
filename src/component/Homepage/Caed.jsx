import React, { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Caed = ({digital}) => {

    const [isBuyNow,setIsBuyNow] = useState(false);

    const handleBuy = () => {
         setIsBuyNow(true);
    }


    return (
        <div key={digital.id} className='relative border rounded-2xl p-2 space-y-3 shadow-lg'>        
                         
                          <div className=''>
                            <img className='h-12 w-12 rounded-xl my-5'
                            src={digital.image} alt="" />
                          </div>
                            
                             <div className='absolute rounded-xl border w-25
                              text-center px-1 top-3 left-65 font-bold'>
                            {digital.tag} </div>

                          <div>
                               <h2 className='text-2xl font-bold mb-2'>{digital.name}</h2>
                               <p className='mb-2 text-[#627382]'>{digital.description}</p>
                               <div className='mb-3'><span className='text-xl font-bold'>${digital.price}</span> /month</div>

                               <div className='mb-4'>
                                    {digital.features.map((feature,index) =>   
                                      <ul className='flex items-center gap-1'>
                                        <IoMdCheckmark  className='text-green-500' />
                                        <li key={index} className='text-[#627382]'>{feature}</li>
                                      </ul>
                                    )}
                               </div>

                        <div className='text-center'>
                             <button className="btn bg-linear-to-r from-blue-500 to-purple-600
                                    rounded-full text-white mb-3 w-[90%]"
                                    onClick={handleBuy}>
                                    {isBuyNow ? "Added in cart" : "Buy Now"}</button>
                        </div>
                                
                          </div>

                     </div>

    );
};

export default Caed;