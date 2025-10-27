import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl ">
        <Title text1={"MY"} text2={"ORDERS"}></Title>
      </div>
      <div>
        {products.slice(1, 4).map((data, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            {/* for image */}
            <div className="flex items-start gap-6 text-xs">
              <img src={data.image[0]} alt="" className="w-16 sm:w-20"></img>
              <div>
                <p className="sm:text-base font-medium ">{data.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-large">
                    {currency}
                    {data.price}
                  </p>
                  <p>Quantity:1</p>
                  <p>Size:M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">25, sep, 2025</span>
                </p>
                {/* <p>payment:cod</p> */}
              </div>
            </div>
            {/*  */}
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 bg-green-300 rounded-full border-none"></p>
                <p className="">Ready to ship</p>
              </div>
              <button>Track orders</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
