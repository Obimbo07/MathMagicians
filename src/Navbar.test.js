import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

test('Navbar renders', () => {
  const { asFragment } = render(
    <Router>
      <Navbar />
    </Router>,
  );
  expect(asFragment()).toMatchSnapshot();
});
