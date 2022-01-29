import { combineReducers } from "redux";
import catalogReducer from "./catalogReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
const createRootReducer = () =>
  combineReducers({
    catalog: catalogReducer,
    categories: categoryReducer,
    products: productReducer,
  });

export default createRootReducer;
