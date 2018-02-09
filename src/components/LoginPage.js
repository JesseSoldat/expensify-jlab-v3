import React from 'react';
import {connect} from 'react-redux';

export const LoginPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>Let a computer keep track of your expenses!</p>
      <button>Login with Google</button>
    </div>
  </div>
);

export default LoginPage;