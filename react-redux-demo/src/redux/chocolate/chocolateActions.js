import { BUY_CHOCOLATE } from "./chocolateTypes";
export const buyChocolate = function (number = 1) {
  return {
    type: BUY_CHOCOLATE,
    payload: number,
  };
};
