import { configureStore } from '@reduxjs/toolkit';
import { tokenReducer } from './reducers/tokenReducer';

const store = configureStore({
  reducer: {
    token: tokenReducer, 
  },
});

export default store;
