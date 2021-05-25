import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const reducer = combineReducers({
  labelsReducer: rootReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
