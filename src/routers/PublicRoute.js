import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  component: Component
}) => (
  false ? (
    <Redirect to="/dashboard" />
  ) : (
    <Component />
  )
);

export default PublicRoute;