import React, { useState } from "react";
import "./styles.css";
import StoreRoutes from "./components/Routes";
import { Route } from "react-router-dom";

import navbarElements from "./components/context";

export default function App() {
  const shoeData = [
    {
      name: "Nike Air Max 270",
      type: "Mens",
      link:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f6986c93-de4e-4c73-95d2-02ffcdc846c4/air-zoom-type-mens-shoe-PZR40V.jpg",
      price: "$120"
    },
    {
      name: "Nike Air Tailwind 79",
      type: "Mens",
      link:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a1baccb1-c212-499d-b194-bfe6044699e8/air-jordan-1-mid-shoe-1zMCFJ.jpg",
      price: "$120"
    },
    {
      name: "Nike Free Metcon 3",
      type: "Skates",
      link:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1fbc9d9d-0a5a-419f-867c-1bb4c7179ab9/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpg",
      price: "$120"
    },
    {
      name: "Nike SB Adversary",
      type: "Mens",
      link:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-0a8ccb39-2565-47b2-862c-24b206e6f156/air-vapormax-flyknit-3-usa-mens-shoe-SKwDlj.jpg",
      price: "$120"
    },
    {
      name: "Kyrie 6 N7",
      type: "Mens",
      link:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1ab49512-caa7-4ac5-a61d-3c2acd33189c/air-tailwind-79-mens-shoe-mfTWzP.jpg",
      price: "$120"
    },
    {
      name: "Nike React Miler",
      type: "Skates",
      link:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s12ff321cn2nykxhva9j/air-force-1-07-mens-shoe-TjqcX1.jpg",
      price: "$120"
    }
  ];

  const shoeData1 = [
    {
      id: "first",
      name: "Nike Air Max 270",
      type: "Mens",
      link:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f6986c93-de4e-4c73-95d2-02ffcdc846c4/air-zoom-type-mens-shoe-PZR40V.jpg",
      price: "$120"
    },
    {
      id: "second",
      name: "Nike Air Tailwind 79",
      type: "Mens",
      link:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a1baccb1-c212-499d-b194-bfe6044699e8/air-jordan-1-mid-shoe-1zMCFJ.jpg",
      price: "$120"
    },
    {
      id: "third",
      name: "Nike Free Metcon 3",
      type: "Skates",
      link:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1fbc9d9d-0a5a-419f-867c-1bb4c7179ab9/air-zoom-pegasus-37-mens-running-shoe-KLvDcj.jpg",
      price: "$120"
    }
  ];

  const shoeData2 = [
    {
      id: "fourth",
      name: "Nike SB Adversary",
      type: "Mens",
      link:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-0a8ccb39-2565-47b2-862c-24b206e6f156/air-vapormax-flyknit-3-usa-mens-shoe-SKwDlj.jpg",
      price: "$120"
    },
    {
      id: "fifth",
      name: "Kyrie 6 N7",
      type: "Mens",
      link:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1ab49512-caa7-4ac5-a61d-3c2acd33189c/air-tailwind-79-mens-shoe-mfTWzP.jpg",
      price: "$120"
    },
    {
      id: "sixth",
      name: "Nike React Miler",
      type: "Skates",
      link:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s12ff321cn2nykxhva9j/air-force-1-07-mens-shoe-TjqcX1.jpg",
      price: "$120"
    }
  ];

  const [shoes, setShoes] = useState(shoeData);

  const [cart, setCart] = useState([]);

  let [count, setCount] = useState(0);

  let [shoe, setShoe] = useState(0);
  let [searShoe, setsearShoe] = useState(0);

  const addCart = (name) => {
    // console.log(name)
    shoeData.forEach(function checkShoes(element, index) {
      if (element.name === name) {
        setCart(cart.concat(element));

        return cart;
      }
    });
    console.log(cart);

    setCount(count + 1);
    console.log(count);
  };

  const findShoe = (name) => {
    console.log(name);
    shoeData.forEach(function checkShoe(element, index) {
      if (element.name === name) {
        setShoe(element);
        return shoe;
      }
    });
    console.log(shoe);
  };

  const searchShoe = (shoename) => {
    const myarray = [];

    shoes.filter((item) => {
      if (shoename === item.name) {
        myarray.push(item);
      }
      return myarray;
    });
    setShoes(myarray);
    console.log(shoes);

    // console.log(shoename);

    // shoeData.forEach(function checkShoes(element, index) {
    //   if (element.name === shoename) {
    //     setsearShoe(element);

    //   return searShoe
    //   }
    // });
    // console.log(searShoe);
  };

  // searchnote.addEventListener('input', function () {
  //   let search = searchnote.value.toLowerCase();
  //   let notecard = document.getElementsByClassName('noteCard');
  //   Array.from(notecard).forEach(function (element) {
  //     let para = element.getElementsByClassName('pera')[0].innerText
  //     if (para.includes(search)) {
  //       element.style.display = 'block'
  //     }
  //     else {
  //       element.style.display = 'none'
  //     }

  //   });
  // })

  return (
    <navbarElements.Provider value={cart}>
      <StoreRoutes
        shoes={shoes}
        shoeData1={shoeData1}
        shoeData2={shoeData2}
        shoeData={shoeData}
        addCart={addCart}
        cart={cart}
        count={count}
        findShoe={findShoe}
        shoe={shoe}
        searchShoe={searchShoe}
      />
    </navbarElements.Provider>
  );
}
