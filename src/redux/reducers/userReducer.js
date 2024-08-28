const initialUserState = {
    userId: null,
    name: '',
    email: '',
    username: '',
    title: '',
    bio: '',
  };
  
  export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          userId: action.payload.userId,
          name: action.payload.name,
          email: action.payload.email,
          username: action.payload.username,
          title: action.payload.title,
          bio: action.payload.bio,
        };
      case 'CLEAR_USER':
        return initialUserState;
      default:
        return state;
    }
  };
  