import { CODReducer } from "./CODReducer.js";
import { cartReducer } from "./cartReducer.js";
import { couponReducer } from "./couponReducer.js";
import { drawerReducer } from "./drawerReducer.js";
import { searchReducer } from "./searchReducer.js";
import { userReducer } from "./userReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  drawer: drawerReducer,
  coupon: couponReducer,
  COD: CODReducer,
});

export default rootReducer;
