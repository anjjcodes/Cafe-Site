import React from 'react'
import './Footer.css'
import { assets } from '../../assets/asset'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-left">
                <img  className="logo" alt="" src={assets.logo1} />
                <p>La Lavende Café is your cozy escape for handcrafted brews, fresh bakes, and good vibes. Whether you're grabbing a quick coffee or unwinding with friends, we're here to make every visit feel special. Taste the comfort. Stay for the warmth.</p>
                <div className="footer-icons">
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter}/>
                
                </div>

            </div>
            <div className="footer-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+12-34-56-78</li>
                    <li>contact@lalavende.com</li>
                </ul>

            </div>
            <div className="footer-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <hr></hr>
        <p className='copyright'>copyright 2024 @ La Lavende - All Right Reserved</p>
      
    </div>
  )
}

export default Footer
