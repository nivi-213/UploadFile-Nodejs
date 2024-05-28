import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Corrected import
import fileReducer from './Reducer';

const rootReducer = combineReducers({
  file: fileReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
