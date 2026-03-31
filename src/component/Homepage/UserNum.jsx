import React from 'react';

const UserNum = () => {
    return (
        <div className='flex bg-blue-600 justify-around p-5 mb-25'>
           <div >
                <h2 className='text-4xl font-bold text-white'>50k+</h2>
                <p className='text-[#FFFFFF80]'>Active Users</p>
            </div>
            <div>
               <h2 className='text-4xl font-bold text-white'>200+</h2>
                <p className='text-[#FFFFFF80]'>Premium Tools</p>
            </div>
            <div>
                <h2 className='text-4xl font-bold text-white'>4.9</h2>
                <p className='text-[#FFFFFF80]'>Rating</p>
            </div>
            
        </div>
    );
};

export default UserNum;