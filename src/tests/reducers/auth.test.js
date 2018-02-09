import authReducer from '../../reducers/auth';

test('should set uid from login', () => {
  const uid = '123';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(uid);
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid: '123'}, action);
  expect(state).toEqual({});
});