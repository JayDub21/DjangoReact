import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// import new reducer
import { signupReducer } from "./signup";
import { loginReducer } from "./auth";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer,
    auth: loginReducer 
  });

export default createRootReducer;
