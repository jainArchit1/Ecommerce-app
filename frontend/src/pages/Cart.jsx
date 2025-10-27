import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import bin_icon from "../assets/bin_icon.png";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, cartItem, currency, updateQuantity, navigation } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let Tempdata = [];
    for (let key in cartItem) {
      for (let key2 in cartItem[key]) {
        if (cartItem[key][key2] > 0) {
          Tempdata.push({
            _id: key,
            size: key2,
            quantity: cartItem[key][key2],
          });
        }
      }
    }

    // console.log("data", Tempdata);
    setCartData(Tempdata);
  }, [cartItem]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl  mb-3">
        <Title text1={"YOUR"} text2={"CART"}></Title>
      </div>
      <div className="border-t">
        {cartData.map((item, index) => {
          const data = products.find((product) => product._id === item._id);
          return (
            <div
              key={index}
              className="py-4  border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] item-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img src={data.image[0]} className="w-16 sm:w-20"></img>
                <div className="">
                  <p className="text-xs sm:text-lg font-medium text-black">
                    {data.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="">
                      {currency}
                      {data.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) => {
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      );
                }}
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
              ></input>
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={bin_icon}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
              ></img>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20 ">
        <div className="w-full sm:w-[450px]">
          <CartTotal></CartTotal>
          <div className="w-full text-end">
            <button
              className="bg-black text-white text-sm  px-8 py-4 my-8"
              onClick={() => navigation("/place-order")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
