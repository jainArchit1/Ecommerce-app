import React from "react";
import HeroSection from "../components/HeroSection";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import Policy from "../components/Policy";
import NewsLetter from "../components/NewsLetter";
const Home = () => {
 
  return (
    <div>
      <HeroSection></HeroSection>
      <LatestCollection></LatestCollection>
      <BestSeller></BestSeller>
      <Policy></Policy>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
