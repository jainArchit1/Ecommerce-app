import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.png";
// import contact_img from "../assets/contact_img.png";
import profile_icon from "../assets/profile_icon.png";
import cart_icon from "../assets/cart_icon.png";
import menu_cart from "../assets/menu_icon.png";
import dropdown_icon from "../assets/dropdown_icon.png";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
const Navbar = () => {
  // console.log("Navbar rendered");
  const [visible, SetVisible] = useState(false);
  const { showsearch, setShowSearch } = useContext(ShopContext);
  return (
    <div className="flex justify-between items-center py-5 font-medium">
      {/* logo */}
      {/* first div */}
      <img src={logo} className="w-36"></img>
      {/* links */}
      {/* second div */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 h border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 h border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 h border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 h border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
        <NavLink to="/login" className="flex flex-col items-center gap-1">
          <p>ADMIN</p>
          <hr className="w-2/4 h border-none h-[1.5px] bg-gray-700 hidden"></hr>
        </NavLink>
      </ul>
      {/* third div */}
      <div className="flex items-center gap-6">
        <img
          onClick={() => {
            setShowSearch(true);
          }}
          src={search_icon}
          className="w-5 cursor-pointer"
        ></img>
        <div className="group relative">
          <img src={profile_icon} className="w-5 cursor-pointer"></img>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor pointer hover:text-black">My profile</p>
              <p className="cursor pointer hover:text-black">Orders</p>
              <p className="cursor pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={cart_icon} className="w-5 min-w-5 "></img>
        </Link>
        <img
          onClick={() => {
            SetVisible(true);
          }}
          src={menu_cart}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        ></img>
      </div>
      {/* sidebar menu */}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => SetVisible(false)}
          >
            <img src={dropdown_icon} className="h-5 rotate-180"></img>
            <p>Back</p>
          </div>
          {/*  */}
          <NavLink
            onClick={() => {
              SetVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/"
          >
            {" "}
            HOME{" "}
          </NavLink>
          <NavLink
            onClick={() => {
              SetVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION{" "}
          </NavLink>
          <NavLink
            onClick={() => {
              SetVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/contact"
          >
            {" "}
            CONTACT
          </NavLink>
          <NavLink
            onClick={() => {
              SetVisible(false);
            }}
            className="py-2 pl-6 border "
            to="/about"
          >
            {" "}
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => {
              SetVisible(false);
            }}
            className="py-2  pl-6 bordr"
            to="/login"
          >
            {" "}
            ADMIN
          </NavLink>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Navbar;
