export const setUser = (state, action) => {
    return {
      type: 'SET_USER',
      payload: {
        state,
        action,
      },
    };
  };
  
  export const clearTokens = () => {
    return {
      type: 'CLEAR_TOKENS',
    };
  };
  