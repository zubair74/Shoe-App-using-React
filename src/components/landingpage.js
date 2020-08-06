import React from "react";
import Navbar from "./navbar";

import Crousel from "./crousel";

import Homepageprod from "./homepageprod";

import Footer from "./footer";

export default function LandingPage({shoes,findShoe,shoeData,shoeData1,shoeData2,addCart,count,cart,searchShoe}) {
  return (
    <>
      <Navbar cart={cart} count={count} searchShoe = {searchShoe}/>
      <Crousel />
      <Homepageprod shoes = {shoes} shoeData = {shoeData} findShoe = {findShoe} shoeData1={shoeData1} shoeData2 = {shoeData2} addCart={addCart} />
      <Footer />
    </>
  );
}



