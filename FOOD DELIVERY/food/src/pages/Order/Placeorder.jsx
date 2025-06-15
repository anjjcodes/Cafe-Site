import React, { useContext } from "react";
import "./Placeorder.css";
import { Storecontext } from "../../Context/storecontext";
const Placeorder = () => {

  const {getTotalAmt} = useContext(Storecontext)
  return (
    <div className="place-order">
      <div className="place-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Street" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Pin Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-right">
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
      </div>
    </div>
  );
};

export default Placeorder;
