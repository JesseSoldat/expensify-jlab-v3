import database from '../firebase/firebase';

let rootDatabase;

switch(process.env.NODE_ENV) {
  case 'test':
    rootDatabase = 'test';
    break;
  case 'production':
    rootDatabase = 'production';
    break;
  case 'development':
    rootDatabase = 'development';
    break;
  default:
    console.log(process.env.NODE_ENV, 'procees.env.NODE_ENV was not found!');
    rootDatabase = 'development';    
}

//SET--------------------------------------------------
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`${rootDatabase}/users/${uid}/expenses`)
      .once('value')
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};