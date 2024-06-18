import { combineReducers, configureStore } from "@reduxjs/toolkit";
import keywordReducer from "./reducers/search";

const rootReducer = combineReducers({
  keyword: keywordReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
