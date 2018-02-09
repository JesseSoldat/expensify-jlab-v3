export default (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      // console.log('LOGIN', action.uid);     
      return {
        uid: action.uid
      };

    case 'LOGOUT':
      return {};

    default:
      return state;
  }
};