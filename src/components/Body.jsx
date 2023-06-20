import React from "react";
import "./body.css";
import { userData } from "../pizzadata/pizzaitem";
import PizzaItem from "./PizzaItem";
import { useSelector } from "react-redux";

function Body() {
  const data = userData;
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <div className="body">
      {data.map((item, index) => (
        <PizzaItem pizza={item} key={index} />
      ))}
    </div>
  );
}

export default Body;
