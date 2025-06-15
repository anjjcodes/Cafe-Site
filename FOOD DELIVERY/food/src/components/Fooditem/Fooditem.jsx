import React, {useContext, useState} from 'react'
import './Fooditem.css'
import { assets } from '../../assets/asset'
import { Storecontext } from '../../Context/storecontext';
const Fooditem = ({id,fname,price,description,fmage}) => {


    const {cartitems,addtoCart,removefrom} = useContext(Storecontext)
  return (
    <div className='food-item'>
        <div className="food-item-img">

            <img className='food-img' src={fmage}></img>
            {
                !cartitems[id] ? <img className='add' onClick={()=>addtoCart(id)} src = {assets.add_icon_white}></img>
                : <div className="food-item-counter">
                    <img onClick={()=>removefrom(id)} src={assets.remove_icon}></img>
                    <p>{cartitems[id]}</p>
                    <img onClick={()=>addtoCart(id)} src={assets.add_icon_green}></img>
                </div>

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{fname}</p>
                <img src={assets.rating} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">Rs.{price}.00</p>
        </div>
        
    </div>
  )
}

export default Fooditem
