import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/asset";

export const Storecontext = createContext(null);

const StorecontextProvider = (props) => {
  const [cartitems, setCartitems] = useState({});

  const addtoCart = (itemId) => {
    if (!cartitems[itemId]) {
      setCartitems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removefrom = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmt = () => {
    let total = 0;
    for (const i in cartitems) {
      if (cartitems[i] > 0) {
        let iteminfo = food_list.find((product) => product.id === i);
        total += iteminfo.price * cartitems[i];
      }
    }
    return total;
  };
  const contextvalue = {
    food_list,
    cartitems,
    setCartitems,
    addtoCart,
    removefrom,
    getTotalAmt
  };
  return (
    <Storecontext.Provider value={contextvalue}>
      {props.children}
    </Storecontext.Provider>
  );
};
export default StorecontextProvider;
