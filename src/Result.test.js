import React from 'react';
import { render } from '@testing-library/react';
import Result from './components/Result';

describe('Results component', () => {
  it('renders correctly with a number value', () => {
    const { asFragment } = render(<Result value={42} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with a different number value', () => {
    const { asFragment } = render(<Result value={123} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
