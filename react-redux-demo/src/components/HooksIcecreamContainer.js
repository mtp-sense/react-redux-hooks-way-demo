import React from "react";
import { buyIcecream } from "../redux/icecream/icecreamActions";
import { useSelector, useDispatch } from "react-redux";

function HooksIcecreamContainer() {
  const noOfIcecreams = useSelector((state) => state.iceCream.noOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>React redux Icecreams hooks way!</h2>
      <h2>No. of Icecreams - {noOfIcecreams}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy an ice-cream</button>
    </div>
  );
}

export default HooksIcecreamContainer;
