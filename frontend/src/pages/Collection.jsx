import React, { useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import dropdown_icon from "../assets/dropdown_icon.png";
import Title from "../components/Title";

import ProductItem from "../components/ProductItem";
const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [show, SetShow] = useState(false);
  const [FilterProduct, SetFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };
  const applyFilter = () => {
    let productCopy = [...products];
    if (search && showSearch) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    SetFilterProduct(productCopy);
  };
  const sortProduct = () => {
    let data = [...FilterProduct];
    switch (sortType) {
      case "low-high":
        SetFilterProduct(data.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        SetFilterProduct(data.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };
  useEffect(() => {
    SetFilterProduct(products);
  }, []);
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2 "
          onClick={() => {
            SetShow(!show);
          }}
        >
          FILTERS
          <img
            src={dropdown_icon}
            className={`h-3 sm:hidden ${show ? "rotate-90" : " "}`}
          ></img>
        </p>
        {/* category */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            show ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORY</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              ></input>
              men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              ></input>
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              ></input>
              Kids
            </p>
          </div>
        </div>
        {/* subcategory */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            show ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORY</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              ></input>
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              ></input>
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              ></input>
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
          <select
            className="border-2 border-gray-600 text-sm px-3"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by:relevant</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>
        {/*  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {FilterProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              images={item.images}
              name={item.name}
              price={item.price}
            ></ProductItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
