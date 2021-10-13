import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h1>Traditional React-Redux</h1>
      <h2>Number of Cakes:{props.noOfCakes}</h2>
      <button onClick={props.buyCake}>Buy a cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { noOfCakes: state.cake.noOfCakes };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
