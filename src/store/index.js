import { createStore,  applyMiddleware } from "redux";
import personReducer from './reducers/personReducer';
import thunk from "redux-thunk";

const enhancer = applyMiddleware(thunk);

const store = createStore(personReducer, enhancer)

export default store;