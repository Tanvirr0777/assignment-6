import './App.css'
import Banner from './component/Banner/Banner'
import Footer from './component/Footer/Footer'
import Homepage from './component/Homepage/Homepage'
import Navbar from './component/Navbar/Navbar'


const getDigiData = async () =>{
      const res = await fetch("/public/loadData.json");

      return res.json();
}

const digiPromise = getDigiData();


function App() {
 
  return (
    <div className='w-11/12 mx-auto'>
          <Navbar />
          <Banner />
          
          <Homepage digiPromise={digiPromise} />



          <Footer />
    </div>
  )
}

export default App
