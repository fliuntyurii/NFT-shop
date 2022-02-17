import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import productPageReducer from './productPageReducer.jsx';

const reducers = combineReducers({
    productPage: productPageReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;