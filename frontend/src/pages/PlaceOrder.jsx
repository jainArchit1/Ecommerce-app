import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import stripe_logo from "../assets/stripe_logo.png";
import razorpay_logo from "../assets/razorpay_logo.png";
import { ShopContext } from "../context/ShopContext";
const PlaceOrder = () => {
  const [method, SetMethod] = useState("cod");
  const { navigation } = useContext(ShopContext);
  return (
    <div className="border-t flex flex-col sm:flex-row justify-between pt-5 sm:pt-14 gap-4 min-h-[80vh]">
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className=" text-xl  sm:text-2xl my-3">
          <Title text1={"DELIVERY "} text2={"INFORMATION"}></Title>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 px-2 py-1 rounded-md"
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 px-2 py-1 rounded-md"
          ></input>
        </div>
        <div className="flex flex-col gap-3">
          <input
            className="w-full border border-gray-300 px-2 py-1 rounded-md"
            placeholder="Email Address"
          ></input>
          <input
            className="w-full border border-gray-300 px-2 py-1 rounded-md"
            placeholder="Street"
          ></input>
        </div>
        <div className="flex gap-3">
          <input
            className="w-full border border-gray-300 px-2 py-1 rounded-md"
            placeholder="City"
          ></input>
          <input
            className="w-full border border-gray-300 px-2 py-1 rounded-md"
            placeholder="State"
          ></input>
        </div>
        <div className="flex gap-3">
          <input
            className="w-full border border-gray-300 px-2 py-1 rounded-md"
            placeholder="Zip Code"
          ></input>
          <input
            className="w-full border border-gray-300 px-2 py-1 rounded-md"
            placeholder="Country"
          ></input>
        </div>
        <div>
          <input
            className="w-full border border-gray-300 px-2 py-1 rounded-md"
            placeholder="Phone"
          ></input>
        </div>
      </div>
      <div className=" mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal></CartTotal>
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"Method"}></Title>
          <div className="flex flex-col gap-3 lg:flex-row">
            {/* stripe */}
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              onClick={() => {
                SetMethod("stripe");
              }}
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border-none ${
                  method === "stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={stripe_logo} className="h-5 mx-4"></img>
            </div>
            {/* razorpay */}
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              onClick={() => {
                SetMethod("razorpay");
              }}
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border-none ${
                  method === "razorpay" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={razorpay_logo} className="h-5 mx-4"></img>
            </div>
            {/* cash On Delivery  */}
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              onClick={() => {
                SetMethod("cod");
              }}
            >
              <p
                className={`min-w-3.5 h-3.5 rounded-full border-none ${
                  method === "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              <p className="h-5 mx-4">CASH ON DELIVERY</p>
            </div>
            {/*  */}
          </div>
          <div className="w-full text-end mt-8">
            <button
              className="bg-black text-white px-16 py-3  text-xs "
              onClick={() => {
                navigation("/orders");
              }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
