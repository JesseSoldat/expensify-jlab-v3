import moment from 'moment';
const initialState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}