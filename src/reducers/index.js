import { combineReducers } from "redux";
import jsonReducer from "./jsonReducer";
import FormReducer from "./FormReducer";

export default combineReducers({
  json: jsonReducer,
  form: FormReducer
  
})