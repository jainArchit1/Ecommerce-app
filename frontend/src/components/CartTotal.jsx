import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currency } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl ">
        <Title text1={"CART"} text2={"TOTAL"}></Title>
      </div>
      <div className="flex flex-col gap-3 text-sm ">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <hr />
          <p>{currency}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Total</p>
          <p>{currency}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
