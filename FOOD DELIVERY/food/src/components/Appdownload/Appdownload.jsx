import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/asset'

const Appdownload = () => {
  return (
    <div className='app-download' id="app-download">
        <p>For better experience download <br></br> La Lavende App</p>
        <div className="app-download-platforms">
            <img src={assets.playstore} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
       
    </div>
  )
}

export default Appdownload
