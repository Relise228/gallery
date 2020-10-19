import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import galleryReducer from '../reducers/gallery-reducer';

let reducers = combineReducers({
  gallery: galleryReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
