import React from 'react';
import { toast } from 'react-toastify';

const Shopcart = ({carts,setCarts}) => {
   

    const totalPrice = carts.reduce(
    (sum, item) => sum + item.price,
    0
  );


  const handleDelete = (product) =>{

          const filterProduct = carts.filter(carts =>
                carts.name != product.name);

              setCarts(filterProduct); 
              toast(product.name +" "+"remove from cart"); 
  }

  const procedCart = () => {
       setCarts([]);

       if(carts.length !== 0){
        toast.success("Payment successfull");
       }
  }

    return (
        <div className='text-center rounded-xl border mt-6 p-5'>
            <h2 className='text-3xl font-bold mb-6 text-left mt-4'>Your Cart</h2>

            {

                carts.length === 0 ?
                <div className='border w-[70%] h-[400px] flex justify-center items-center 
                                       flex-col gap-4 mx-auto rounded-2xl font-semibold tex-xl'> 
                              <h2>No Products Selected</h2>
                             <p>Please! select suitable products</p>                       
                        </div>
                 :
                carts.map((product,index) => {
                      
                    return <div key={index} className='flex justify-between rounded-xl border
                         p-4 mb-5 shadow-lg'>
                          
                         <div className='flex gap-6'>
                              <div>
                              <img className='w-12 h-12' src={product.image} alt={product.name} />
                          </div>
                          
                          <div>
                              <h4 className='font-bold'>{product.name}</h4>
                              <p className='text-left'>${product.price} /month</p>
                          </div>

                         </div>

                         <div>
                             <button onClick={() => handleDelete(product)} 
                             className='text-rose-500'>Remove</button>
                         </div>

                    </div>
            })
            }

            <div className='flex justify-between my-8'>
                  <p>Total : </p>
                  <h3 className='text-xl font-bold'>${totalPrice}</h3>
            </div>


            <button onClick={procedCart}
             className='btn w-[90%] rounded-3xl
             bg-linear-to-r from-blue-500 to-purple-600 text-white
            '>Proced To Checkout</button>

        </div>
    );
};

export default Shopcart;