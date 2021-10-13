import React, { useState } from "react";
import { connect } from "react-redux";
import { buyChocolate } from "../redux/chocolate/chocolateActions";

function ChocoloateContainer(props) {
  const [number, setnumber] = useState(1);
  return (
    <div>
      <h2>Traditional React Redux Chocolate </h2>
      <h2>NUmber of chocolates - {props.noOfChocolates}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setnumber(e.target.value)}
      />
      <button onClick={()=>props.buyChocolate(number)}>Buy {number} chocolates</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { noOfChocolates: state.chocolate.noOfChocolates };
};
const mapDispatchToProps = (dispatch) => {
  return { buyChocolate: (number) => dispatch(buyChocolate(number)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChocoloateContainer);
