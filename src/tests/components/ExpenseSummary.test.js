import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal ={234}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expensesCount={23} expensesTotal={1323323}/>);
  expect(wrapper).toMatchSnapshot();
});