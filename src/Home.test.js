import React from 'react';
import { render } from '@testing-library/react';
import Home from './components/Home';

test('Home Component Snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
