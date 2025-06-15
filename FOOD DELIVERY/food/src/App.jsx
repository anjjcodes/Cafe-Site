
import React, {useState, useEffect} from 'react'
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Order/Placeorder'
import Footer from './components/footer/Footer'
import Login from './components/Login/Login';

const App = () => {

  const [showLogin , setShowlogin] = useState(false);
  useEffect(() => {
    document.title = "Food";
  }, []);
  return (
    <>
    {showLogin ? <Login setShowlogin={setShowlogin}></Login> : <></>}
    <div className='app'>
      
      <Navbar setShowlogin={setShowlogin}/>
      <Routes>
        <Route path='/' element = {<Home></Home>} />
        <Route path ='/cart' element={<Cart></Cart>} />
        <Route path ='/order' element={<Placeorder/>} />
      </Routes>
    </div>
    <Footer/>

  

  </>
  )
}

export default App


