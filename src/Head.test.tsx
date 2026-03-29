import React from 'react';
import { render, screen } from '@testing-library/react';
import Head from './Head';

test('renders head with logo', () => {
  render(<Head />);
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
});
