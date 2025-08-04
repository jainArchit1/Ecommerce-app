import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import Title from "../components/Title";
import RelatedProduct from "../components/RelatedProduct";
const Product = () => {
  const { productId } = useParams();
  console.log(productId);
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const Fetchdata = () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductData(product);
        setImage(product.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    Fetchdata();
  }, [productId, products]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-12">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse  gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((image, index) => {
              return (
                <img
                  src={image}
                  key={index}
                  className="w-[24%] sm:mb-3 sm:w-full flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    setImage(image);
                  }}
                ></img>
              );
            })}
          </div>
          {/* main image */}
          <div className="w-full sm:w-[80%] ">
            <img src={image} className="w-full h-auto"></img>
          </div>
        </div>
        {/*  product description*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-3 w-3">
            <img className="" src={star_icon}></img>
            <img className="" src={star_icon}></img>
            <img className="" src={star_icon}></img>
            <img className="" src={star_icon}></img>
            <img className="" src={star_dull_icon}></img>
            <p className="pl-2">(112)</p>
          </div>
          <p className="font-medium mt-5 text-3xl">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className=" font-semibold">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => {
                return (
                  <button
                    className={`border py-2 px-4 bg-gray-100  ${
                      item === size ? "border-orange-500" : ""
                    } `}
                    key={index}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            className="bg-black text-white px-8 py-3 text-sm "
            onClick={() => {
              addToCart(productData._id, size);
            }}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:4/5"></hr>
          <div className="mt-5 text-gray-500  text-sm flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* review section */}
      <div className="mt-20">
        <div className="flex ">
          <b className="border  py-3 text-sm px-5">Description</b>
          <p className="border py-3 px-5 text-sm font-semibold">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border text-gray-500 text-sm py-6 px-6">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      {/* related products */}

      <div>
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
        ></RelatedProduct>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
