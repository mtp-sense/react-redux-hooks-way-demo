import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function HooksCakeContainer() {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>React-Redux hooks way</h1>
      <h2>Number of cakes - {noOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy a cake</button>
    </div>
  );
}

export default HooksCakeContainer;
