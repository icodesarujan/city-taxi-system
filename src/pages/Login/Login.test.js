import { render, screen } from '@testing-library/react';
import Login from '../Login';
import {BrowserRouter as Router}  from "react-router-dom";


test('renderes Email address field', () => {
  render(<Router><Login /></Router>);
  const linkElement = screen.getByText(/Email address/i);
  expect(linkElement).toBeInTheDocument();
});
test('renderes Password address field', () => {
  render(<Router><Login /></Router>);
  const linkElement = screen.getByText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});
test('renderes Sign in button', () => {
  render(<Router><Login /></Router>);
  const linkElement = screen.getByText(/Sign in/i);
  expect(linkElement).toBeInTheDocument();
});
