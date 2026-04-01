import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-blue-500 to-purple-600 my-10 text-center space-y-5 p-8'>
         
         <h1 className='text-3xl text-white font-bold'>Ready to Transform Your Workflow?</h1>
         <p className='text-white opacity-[80%]'>Join thousands of professionals who are already using Digitools to work smarter.<br /> Start your free trial today.</p>
         
         <div className='flex gap-3 justify-center'>

            <button className='btn rounded-3xl text-purple-600'>Explore Products</button>
            <button className='btn rounded-3xl text-purple-800 bg-transparent border-purple-400'>View Pricing</button>

         </div>

         <p className='text-white opacity-[80%]'>14-day free trial • No credit card required • Cancel anytime</p>

        </div>
    );
};

export default Workflow;