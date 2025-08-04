import React from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

const PlaceOrder = () => {
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
      //
      <div className=" mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal></CartTotal>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
