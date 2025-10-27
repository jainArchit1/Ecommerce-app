import React from "react";
import Title from "../components/Title";
import contact_img from "../assets/contact_img.png";
import NewsLetter from "../components/NewsLetter";
const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center border-t pt-10">
        <Title text1={"CONTACT"} text2={"US"}></Title>
      </div>
      <div className="flex flex-col md:flex-row gap-10 my-10 justify-center mb-28">
        <img src={contact_img} className="w-full md:max-w-[480px]"></img>
        <div>
          {/* <b>Our Store</b>
          <div>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div>
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
          </div>
          <b>Careers at Forever</b>
          <p>Learn more about our teams and job openings.</p>
          <button>Explore Jobs</button> */}
          <p>Our Store</p>
          <p>
            54709 Willms Station
            <br />
            Suite 350, Washington, USA
          </p>
          <p>
            Tel: (415) 555-0132
            <br />
            Email: admin@forever.com
          </p>
          <p>Careers at Forever</p>
          <p>Learn more about our teams and job openings.</p>
          <button className="hover:bg-black hover:text-white transition-all duration-300s">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Contact;
