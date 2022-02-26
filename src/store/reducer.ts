import { combineReducers } from "redux";
import { tweetsReducer } from "./ducs/Cats/reducer";


export const RootReducer = combineReducers({
  Cats:tweetsReducer
});