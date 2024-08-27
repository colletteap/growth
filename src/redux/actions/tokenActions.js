export const setTokens = (accessToken, refreshToken) => {
    return {
      type: 'SET_TOKENS',
      payload: {
        accessToken,
        refreshToken,
      },
    };
  };
  
  export const clearTokens = () => {
    return {
      type: 'CLEAR_TOKENS',
    };
  };
  