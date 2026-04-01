import React from 'react';
import Caed from './Caed';

const Avlpro = ({digitals,carts,setCarts}) => {
    
    return (
        
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
        
    );
};

export default Avlpro;