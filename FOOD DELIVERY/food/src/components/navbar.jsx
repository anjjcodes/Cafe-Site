import React, { useContext, useState } from 'react'
import './navbar.css';
import { assets } from '../assets/asset';
import {Link } from 'react-router-dom'
import { Storecontext } from '../Context/storecontext';

const Navbar = ({setShowlogin}) => {

    const [view, setView] = useState("home");

    const {getTotalAmt} = useContext(Storecontext);

  return (
    <div className ='nav'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick ={() => setView("home")} className={view==="home"?"active" : ""} >Home</Link> 
        <a href='#explore' onClick ={() => setView("menu")} className={view==="menu"?"active" : ""}>Menu</a>
        <a href ='#app-download' onClick ={() => setView("mobile-app")} className={view==="mobile-app"?"active" : ""}>Mobile-app</a>
        <a href='#footer' onClick ={() => setView("contact-us")} className={view==="contact-us"?"active" : ""}>Contact us</a>
      </ul>
      <div className='nav-right'>
        <img src={assets.search_icon} alt="" />
        <div className="nav-searchicon">
            <Link to='/Cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalAmt() ? "dot": " "}></div>
        </div>
        <button onClick={()=>setShowlogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
