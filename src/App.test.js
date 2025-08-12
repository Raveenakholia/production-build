/** @format */

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to React with Bootstrap!/i);
  expect(linkElement).toBeInTheDocument();
});
