import React from 'react';
import Caed from './Caed';

const Avlpro = ({digitals}) => {
    
    return (
        
              <div className='grid grid-cols-3 gap-6 mt-5'>
                {
                     digitals.map(digital => 
                      <Caed key={digital.id} digital={digital} />
                )
                }
             </div>
        
    );
};

export default Avlpro;