import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*  */}
        <div className="">
          <img src={logo} className="mb-5 w-32  "></img>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/*  */}
        <div>
          <p className="mb-5 text-xl font-semibold"> COMPANY</p>
          <div className="flex flex-col gap-1 text-gray-600">
            <p>Home</p>
            <p>About us</p>
            <p>Delivery</p>
            <p>Privacy policy</p>
          </div>
        </div>
        {/*  */}
        <div>
          <p className="texxt-xl mb-5 font-semibold">GET IN TOUCH</p>
          <div className="flex flex-col gap-1 text-gray-600 ">
            <p>+1-000-000-0000</p>
            <p>Work.dev@gmail.com</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center text-black text-sm py-5">
          Copyright 2024@ greatstack.dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
