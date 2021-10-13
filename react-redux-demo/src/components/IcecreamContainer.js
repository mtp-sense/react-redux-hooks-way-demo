import React from "react";
import { buyIcecream } from "../redux/icecream/icecreamActions";
import { connect } from "react-redux";

function IcecreamContainer(props) {
  return (
    <div>
      <h2>Traditional React-redux</h2>
      <h2>Number of Ice-creams - {props.noOfIcecreams}</h2>
      <button onClick={props.buyIcecream}>Buy an Ice-cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { noOfIcecreams: state.iceCream.noOfIcecreams };
};
const mapDispatchToProps = (dispatch) => {
  return { buyIcecream: () => dispatch(buyIcecream()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
