import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyChocolate } from "../redux/chocolate/chocolateActions";

function HooksChocolateContainer() {
  const noOfChocolates = useSelector((state) => state.chocolate.noOfChocolates);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>React-Redux Hooks way!</h2>
      <h2>No of chocolates - {noOfChocolates}</h2>
      <button onClick={() => dispatch(buyChocolate())}>Buy a chocolate</button>
    </div>
  );
}

export default HooksChocolateContainer;
