import React from 'react';
import Caed from './Caed';
import Workflow from '../Workflow';
import Step from '../Step';
import Simple from './Simple';

const Avlpro = ({digitals,carts,setCarts}) => {
    
    return (
        
             <>
             
                 <div className='grid grid-cols-3 gap-6 mt-5'>
                {
                     digitals.map(digital => 

                      <Caed key={digital.id} 
                      digital={digital} 
                      carts={carts}
                      setCarts={setCarts}
                    />
                )
                }

             </div>
             
                  <Step />

                  <Simple />

                 <Workflow />

             </>

             
        
    );
};

export default Avlpro;