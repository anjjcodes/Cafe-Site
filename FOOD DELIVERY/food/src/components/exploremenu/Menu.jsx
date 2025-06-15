import React from 'react'
import './Menu.css';
import { menu_list } from '../../assets/asset';
const Menu = ({category,setCategory}) => {
  return (
    <div className='Explore_Menu' id="explore">
        <h1>Explore our Menu</h1>
        <p className='textmenu'>Pick your favorites from our menu made to delight and surprise.</p>
        <div className="explorelist">
            {menu_list.map((item,index)=> {
                return(
                    <div onClick={() =>setCategory(prev=>prev === item.name ? "All" : item.name)}key = {index} className='Menulistitems'>
                        <img className={category===item.name ? "active" : "" }src = {item.image}></img>
                        <p>{item.name}</p>
                    
                    </div>
                )
            })}
        </div>
        <hr></hr>
      
    </div>
  )
}

export default Menu
