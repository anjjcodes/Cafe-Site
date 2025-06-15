import React, { useContext } from "react";
import "./Cart.css";
import { Storecontext } from "../../Context/storecontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartitems, food_list, removefrom,getTotalAmt } = useContext(Storecontext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitems[item.id] > 0) {
            return (
              <div>
                <div className="cart-item">
                  <img src={item.fmage}></img>
                  <p>{item.fname}</p>
                  <p>₹ {item.price}</p>
                  <p>{cartitems[item.id]}</p>
                  <p>
                    ₹ {item.price*cartitems[item.id]}
                  </p>
                  <p onClick={() => removefrom(item.id)} className="cross">x</p> 
                </div>
                <hr></hr>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-totdetails">
              <p>SubTotal</p>
              <p>₹ {getTotalAmt()}</p>
            </div>
            <hr />
            <div className="cart-totdetails">
              <p>Delivery Fee</p>
              <p>₹ {getTotalAmt()===0 ? 0 : 70}</p>

            </div>
            <hr />
            <div className="cart-totdetails">
                <b>Total</b>
                <b>₹ {getTotalAmt()===0 ? 0 : getTotalAmt()+70}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate('/order')}>
              PROCEED TO CHECKOUT
            </button>
        </div>
        <div className="cart-promo">
          <div>
            <p>If u have a promo code,Enter it here</p>
            <div className="promo-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
