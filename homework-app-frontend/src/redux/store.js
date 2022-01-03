import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/authReducer";
import homeworkReducer from "./homework/homeworkReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeworks: homeworkReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
