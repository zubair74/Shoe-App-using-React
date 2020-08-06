import React from "react";
import "../styles.css";
import LandingPage from "./landingpage";

import ProductDetails from "./ProductDetails";


import Cart from "./cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function StoreRoutes({
  shoes,
  shoe,
  findShoe,
  shoeData,
  shoeData1,
  shoeData2,
  addCart,
  count,
  cart,
  searchShoe
}) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage
          shoes = {shoes}
            findShoe={findShoe}
            shoeData1={shoeData1}
            shoeData2={shoeData2}
            shoeData={shoeData}
            addCart={addCart}
            count={count}
            card={cart}
            searchShoe = {searchShoe}
          />
        </Route>

        <Route exact path="/products/:id">
          <ProductDetails shoe={shoe} addCart = {addCart} count={count}/>
        </Route>

        <Route path="/cart">
          <Cart cart={cart} count={count}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default StoreRoutes;
