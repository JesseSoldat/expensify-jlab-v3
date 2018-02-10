
export default (state = [], action) => {
  switch(action.type) {
    case 'SET_EXPENSES':
      console.log('SET_EXPENSES', action.expenses);
      return action.expenses;
    default:
      return state;
  }
};