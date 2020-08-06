import React from "react";
import "../styles.css";

import Navbar from "./navbar";

import Footer from "./footer";

import { useHistory } from "react-router-dom";

import CartItems from './cartItems'
// import { useLocation } from 'react-router'




export default function Cart({cart,count}) {
  // console.log(mycart)


  return(
    <div>
      <Navbar count = {count}/>
      <div>
      <CartItems cart = {cart}/>

      </div>
      <Footer/>
    </div>


  );
}