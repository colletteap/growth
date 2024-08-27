const initialState = {
    accessToken: null,
    refreshToken: null,
  };
  
  export const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TOKENS':
        return {
          ...state,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        };
      case 'CLEAR_TOKENS':
        return {
          accessToken: null,
          refreshToken: null,
        };
      default:
        return state;
    }
  };
  