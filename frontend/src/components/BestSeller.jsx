import React, { useEffect } from "react";
import Title from "./Title";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [BestSeller, SetBestSeller] = useState([]);
  useEffect(() => {
    const bestSeller = products.filter((product) => product.bestseller);
    SetBestSeller(bestSeller.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"}></Title>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, et.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {BestSeller.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          ></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
