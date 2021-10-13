import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";
import chocolateReducer from "./chocolate/chocolateReducer";
import userReducer from "./user/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
  chocolate: chocolateReducer,
  user: userReducer,
});

export default rootReducer;
