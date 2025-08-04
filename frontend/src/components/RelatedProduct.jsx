import React from "react";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const RelatedProduct = ({ category, subCategory }) => {
  const [relatedProduct, setRelatedProduct] = useState([]);
  const { products } = useContext(ShopContext);
  useEffect(() => {
    if (products.length > 0) {
      let data = products.slice();
      data = data.filter((product) => category === product.category);
      data = data.filter((product) => subCategory === product.subCategory);
      setRelatedProduct(data.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"}></Title>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {relatedProduct.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            ></ProductItem>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
