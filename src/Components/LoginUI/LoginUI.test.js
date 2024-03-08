import { render, screen } from '@testing-library/react';
import LoginUI from '../LoginUI';

test('renders learn react link', () => {
  render(<LoginUI />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
