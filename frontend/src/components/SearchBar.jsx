import React, { useEffect, useState } from "react";
import { useContext } from "react";
import cross_icon from "../assets/cross_icon.png";
import { ShopContext } from "../context/ShopContext";
import search_icon from "../assets/search_icon.png";
import { useLocation } from "react-router-dom";
const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, SetVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname.includes("collection")) {
      SetVisible(true);
    } else {
      SetVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex item-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          onClick={(e) => {
            e.target.value;
          }}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="flex-1 bg-inherit text-sm outline-none"
        ></input>
        <img src={search_icon} className="w-5"></img>
      </div>
      <img
        className="inline w-4 cursor-pointer"
        src={cross_icon}
        onClick={() => setShowSearch(false)}
      ></img>
    </div>
  ) : null;
};

export default SearchBar;
