import { configureStore } from '@reduxjs/toolkit';
import { tokenReducer } from './reducers/tokenReducer';
import { userReducer } from './reducers/userReducer'; 

const store = configureStore({
  reducer: {
    token: tokenReducer, 
    user: userReducer,
  },
});

export default store;
