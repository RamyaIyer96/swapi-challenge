import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../reducers/reducer";

export const initialState = {
  
  movies: null,
  isLoading: false,
  error: null,
  planets: null,
  people: null,
  movie: null,
  peopleDetail:null,
  planet:null,
  
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
