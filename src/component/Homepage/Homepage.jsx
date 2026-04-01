import React from 'react';
import UserNum from './UserNum';
import DigiItems from './DigiItems';
import Step from '../Step';
import Workflow from '../Workflow';


const Homepage = ({digiPromise,carts,setCarts}) => {
    return (
        <div className=''>
            <UserNum />

            <DigiItems digiPromise={digiPromise} 
                        carts={carts}
                        setCarts={setCarts}
            />
           
           

        </div>
    );
};

export default Homepage;