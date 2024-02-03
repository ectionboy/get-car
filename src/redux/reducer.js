import { combineReducers } from "redux";
import { carsReducer } from "./cars/slice";
import { filterReducer } from "./filter/slice";
import { favoritesReducer } from "./favorite/slice";

export const rootReducer = combineReducers({
    cars: carsReducer,
    filter: filterReducer,
    favorites: favoritesReducer,

  });