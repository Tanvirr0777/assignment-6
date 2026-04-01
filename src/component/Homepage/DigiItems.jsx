import React, { use, useState } from 'react';
import Caed from './Caed';
import Shopcart from './Shopcart';
import Avlpro from './Avlpro';



const DigiItems = ({digiPromise}) => {

    const digitals = use(digiPromise);

    const [select,setSelect] = useState("products");

    const [carts,setCarts] = useState([]);


    return (
        <div className=''>


            <div className='w-[80%] mx-auto text-center space-y-4 '>
                  <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                  <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity. </p>
                  
                  <div className='flex gap-2 justify-center'>
                      <div>
                        <a onClick={() => setSelect("products")}
                         className={`btn ${select == "products" ? "bg-linear-to-r        from-blue-500 to-purple-600 text-white" : "text-blue-500 border-blue-500"}
                                       rounded-full `}>
                                       Products</a>
                    </div>
                    <div>
                          <a onClick={() => setSelect("cart")}
                               className={`btn  ${select == "cart" ?
                                "text-white bg-linear-to-r  from-blue-500 to-purple-600" : "text-blue-500 border-blue-500"
                               } rounded-full`}>   
                                       Cart ({carts.length})</a>
                                  </div>
                  </div>

            </div>

          {/* showing products */}

              {
                select === "products" ?
                <Avlpro 
                    digitals={digitals}
                    carts={carts}
                    setCarts={setCarts}
                 />:
                <Shopcart
                   carts={carts}
                   setCarts={setCarts}
                   />       
             } 

        </div>
    );
};

export default DigiItems;