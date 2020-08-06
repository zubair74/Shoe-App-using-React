import React from "react";
import "../styles.css";

import Cards from "./cards";

export default function Homepageprod({shoes, shoeData,addCart,findShoe,shoeData1,shoeData2 }) {
  
  return (
    <div>
      <div>
        <h3 className="headings">NEW ARRIVALS</h3>
      </div>

      <div>
          <Cards shoes = {shoes} shoeData={shoeData} addCart={addCart} findShoe={findShoe}/>

      </div>
    </div>
  );
}
