import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
  component: Component
}) => (
  true ? (
    <div>
      <Header />
      <Component />
    </div>
  ) : (
    <Redirect to="/" />
  )
)

export default PrivateRoute;