const initialUserState = {
    userId: null,
    name: '',
    email: '',
    username: '',
    title: '',
    bio: '',
    yearsExperience: '',
    education: '',
    contactInfo: '',
    favBooks: '',
  };
  
  export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
      case 'SET_USER':
        console.log(action.payload);
        return {
          ...state,
          userId: action.payload.userId,
          name: action.payload.name,
          email: action.payload.email,
          username: action.payload.username,
          title: action.payload.title,
          bio: action.payload.bio,
          yearsExperience: action.payload.yearsExperience,
          education: action.payload.education,
          contactInfo: action.payload.contactInfo,
          favBooks: action.payload.favBooks,
        };
      case 'CLEAR_USER':
        return initialUserState;
      default:
        return state;
    }
  };
  