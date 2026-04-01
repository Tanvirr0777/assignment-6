import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const Simple = () => {
    return (
        <div className='mt-20 mb-10'>
             <h2 className='text-5xl font-bold text-center mb-3'>Simple, Transparent Pricing</h2>
             <p className='text-gray-500 text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

             <div className='mt-8  grid grid-cols-1 gap-5 md:grid-cols-3'>

                   <div className='border shadow-lg p-5 space-y-4 rounded-xl text-center'>
                       <h2 className='text-2xl font-bold text-left'>Starter</h2>
                       <p className='text-gray-500 text-left'>Perfect for getting Started</p>

                       <h1 className='text-left'><span className='text-3xl font-bold'>$0</span>/Month</h1>

                        <ul className='text-gray-500'>
                            <li className='flex items-center'> 
                                <IoMdCheckmark className='text-green-600' /> Access to 10 free tools </li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-green-600'/> Basic templates</li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-green-600' /> Community support</li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-green-600'/> 1 project per month</li>
                        </ul>

                        <button className='btn rounded-2xl bg-linear-to-r from-blue-500
                         to-purple-600 text-white w-[85%] mt-11 px-3
                        '>
                            Get Started Free</button>

                   </div>

                   <div className='border shadow-lg p-5 space-y-4 rounded-xl
                        bg-linear-to-r from-blue-500 to-purple-600 text-white
                        text-center relative '>
                    <div className='absolute -top-[4%] left-[40%]
                     bg-amber-200 rounded-3xl px-2 py-1 text-red-600 md:left-[35%]'>Most Populer</div>
                       <h2 className='text-2xl font-bold text-left'>Pro</h2>
                       <p className='text-white text-left'>Best For Professional</p>

                       <h1 className='text-left'><span className='text-3xl font-bold'>$20</span>/Month</h1>

                        <ul className='text-white'>
                            <li className='flex items-center'> 
                                <IoMdCheckmark className='text-white' /> Access to All premium tools </li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-white'/> Unlimited templates</li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-white' /> Priority support</li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-white'/> Unlimited project</li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-white'/> UCloud sync</li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-white'/> Advance analytics</li>
                        </ul>

                        <button className='btn rounded-2xl bg-white text-purple-600 px-3 w-[80%]
                         mx-auto '>
                            Start Pro Trial</button>

                   </div>

                   <div className='border shadow-lg p-5 space-y-4 rounded-xl text-center'>
                       <h2 className='text-2xl font-bold text-left'>Enterprise</h2>
                       <p className='text-gray-500 text-left'>For teams and businesses</p>

                       <h1 className='text-left'><span className='text-3xl font-bold'>$99</span>/Month</h1>

                        <ul className='text-gray-500'>
                            <li className='flex items-center'> 
                                <IoMdCheckmark className='text-green-600' /> Everything is pro </li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-green-600'/> Team collaboration</li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-green-600' /> Custom integration</li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-green-600'/> Deadicated support</li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-green-600'/> SLA gurante</li>
                            <li className='flex items-center gap-1'>
                                <IoMdCheckmark className='text-green-600'/> Custom branding</li>
                        </ul>

                        <button className='btn rounded-2xl bg-linear-to-r from-blue-500
                         to-purple-600 text-white w-[85%] px-3
                        '>
                            Contact Sales</button>

                   </div>

             </div>

        </div>
    );
};

export default Simple;