import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders Hello component with name', () => {
  render(<Hello name="Kushal" />);
  const element = screen.getByText(/Hello, Kushal!/i);
  expect(element).toBeInTheDocument();
});
