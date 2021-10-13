import { BUY_CHOCOLATE } from "./chocolateTypes";
const initialState = {
  noOfChocolates: 50,
};

const chocolateReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHOCOLATE:
      return {
        ...state,
        noOfChocolates: state.noOfChocolates - action.payload,
      };
    default:
      return state;
  }
};
export default chocolateReducer;
