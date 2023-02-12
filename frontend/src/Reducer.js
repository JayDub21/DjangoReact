import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// import new reducer
import { signupReducer } from "./containers/signup/SignupReducers";
import { loginReducer } from "./containers/login/LoginReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    createUser: signupReducer,
    auth: loginReducer 
  });

export default createRootReducer;
