import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();
import { useNavigate } from "react-router-dom";
const ShopContextProvider = (props) => {
  const currency = "$";
  const Delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const navigation = useNavigate();

  const addToCart = (itemId, size) => {
    if (!size) {
      alert("Please select a size");
      return;
    }

    let cartData = structuredClone(cartItem); // ✅ correctly cloned

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData);
  };

  const countProduct = () => {
    let count = 0;
    for (const item in cartItem) {
      for (const size in cartItem[item]) {
        count += cartItem[item][size];
      }
    }
    return count;
  };
  const updateQuantity = async (itemId, size, quantity) => {
    console.log("cartItem", cartItem);
    let cartData = structuredClone(cartItem);
    console.log(itemId, size, quantity);
    cartData[itemId][size] = quantity;
    setCartItem(cartData);
  };

  useEffect(() => {
    console.log("Cart Updated:", cartItem);
  }, [cartItem]);

  const value = {
    products,
    currency,
    Delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    countProduct,
    updateQuantity,
    navigation,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
