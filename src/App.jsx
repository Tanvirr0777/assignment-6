import { useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Homepage from './component/Homepage/Homepage'
import Navbar from './component/Navbar/Navbar'


    const getDigiData = async () =>{
      const res = await fetch("/loadData.json");

      return res.json();
   }

    const digiPromise = getDigiData();

    


function App() {

      const [carts,setCarts] = useState([]);
 
  return (
    <div className='w-[100 %] mx-auto lg:w-11/12'>
         
          <Navbar 
            carts={carts}
            />

          <Banner />
          
          <Homepage digiPromise={digiPromise}
                    carts={carts}
                    setCarts={setCarts}
           />
      
          <Footer />
    </div>
  )
}

export default App
