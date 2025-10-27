import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";

const CartTotal = () => {
  const { currency, getCartAmount, Delivery_fee } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl ">
        <Title text1={"CART"} text2={"TOTAL"}></Title>
      </div>

      <div className="flex flex-col gap-3 text-sm ">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {Delivery_fee}.00
          </p>
        </div>

        <div className="flex justify-between">
          <p className="font-semibold">Total</p>
          <p>
            {currency}
            {getCartAmount() ? getCartAmount() + Delivery_fee : 0}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
