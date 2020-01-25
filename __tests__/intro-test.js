import React from 'react';
import Login from '../screens/Login';

import renderer from 'react-test-renderer';

jest.useFakeTimers()

test('renders correctly', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});