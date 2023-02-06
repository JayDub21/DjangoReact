import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// import new reducer
import { signupReducer } from "./containers/signup/SignupReducers";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer 
  });

export default createRootReducer;
