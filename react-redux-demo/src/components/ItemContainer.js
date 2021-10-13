import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIcecream } from "../redux/icecream/icecreamActions";

function ItemContainer(props) {
  return (
    <div>
      <h2>Items to be displayed using OwnProps</h2>
      <h2>
        No of {props.itemName}: {props.noOfitems}
      </h2>
      <button onClick={props.buyItem}>Buy {props.itemName}</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.noOfCakes
    : state.iceCream.noOfIcecreams;
  const itemName = ownProps.cake ? "Cakes" : "Ice-creams";
  return {
    noOfitems: itemState,
    itemName: itemName,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
