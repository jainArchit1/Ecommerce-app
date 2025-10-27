import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
export const ShopContext = createContext();
import { useNavigate } from "react-router-dom";
const ShopContextProvider = (props) => {
  const currency = "$";
  const Delivery_fee = 10;
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const [products, setProducts] = useState([]);
  const navigation = useNavigate();
  const [token, setToken] = useState("");

  const addToCart = (itemId, size) => {
    if (!size) {
      alert("Please select a size");
      return;
    }

    let cartData = structuredClone(cartItem);

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
    // console.log(itemId, size, quantity);
    cartData[itemId][size] = quantity;
    setCartItem(cartData);
  };

  const getCartAmount = () => {
    let total = 0;
    for (const key in cartItem) {
      let itemInfo = products.find((item) => item._id === key);
      console.log("itemInfo", itemInfo);
      for (const key2 in cartItem[key]) {
        try {
          if (cartItem[key][key2] > 0) {
            total += itemInfo.price * cartItem[key][key2];
          }
        } catch {
          console.log("error");
        }
      }
    }
    return total;
  };
  useEffect(() => {
    console.log("Cart Updated:", cartItem);
  }, [cartItem]);
  const addProduct = async () => {
    try {
      const response = await axios.get(backend_url + "/api/product/getProduct");
      // console.log(response);
      console.log(response.data);
      if (response.data.success) {
        setProducts(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    addProduct();
  }, []);
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
    token,
    setToken,
    getCartAmount,
    backend_url,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
