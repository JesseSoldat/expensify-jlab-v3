import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpenseList from './ExpenseList';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseSummary />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;