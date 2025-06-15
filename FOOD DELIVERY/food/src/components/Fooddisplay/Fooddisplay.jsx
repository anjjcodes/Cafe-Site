import React, {useContext} from 'react'
import './Fooddisplay.css'
import { Storecontext } from '../../Context/storecontext'
import Fooditem from '../Fooditem/Fooditem';


const Fooddisplay = ({category}) => {
    const {food_list}  = useContext(Storecontext);

  return (
    <div className='food-display' id ='food-display'>
      <h2>Top Dishes near you</h2>
      <div className="fooddisplay-list">
        {food_list.map((item,index)=> {
            if(category==="All" || category ===item.category){
                return <Fooditem key={index} id={item.id} fname = {item.fname} description={item.description} price = {item.price} fmage = {item.fmage}></Fooditem>
            }
            
        })}
      </div>
    </div>
  )
}

export default Fooddisplay
