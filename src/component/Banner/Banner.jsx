import React from 'react';
import { FaRegCircleDot } from 'react-icons/fa6';
import { RxResume } from 'react-icons/rx';

const Banner = () => {
    return (
        <div>
        <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10">
       

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30
           text-purple-400 text-sm font-medium px-5 py-2 rounded-full">
            <FaRegCircleDot /> New: AI-Powered Tools Available
          </div>

          <h1 className="text-[#101727] text-5xl lg:text-5xl font-bold leading-tight tracking-tighter">
            Supercharge Your
            <br /> Digital Workflow
          </h1>

          <p className="text-[#627382] max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>

          <div className='flex gap-5'>
            <div>
                <a className="btn bg-linear-to-r from-blue-500 to-purple-600
                 rounded-full text-white">
                Get Started</a>
            </div>
            <div>
                <a className="btn border-blue-500
                 rounded-full text-blue-500">
                 <RxResume />   
                 Watch Demo</a>
            </div>

         </div>

        </div>


        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain 
              drop-shadow-2xl rounded-3xl "
              src="/src/assets/banner.png"
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;