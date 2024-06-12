import { render, screen } from '@testing-library/react';
import Operator from '../Operator';
import {BrowserRouter as Router}  from "react-router-dom";


test('renderes From field', () => {
  render(<Router><Operator /></Router>);
  const linkElement = screen.getByText(/From /i);
  expect(linkElement).toBeInTheDocument();
});
test('renderes To field', () => {
  render(<Router><Operator /></Router>);
  const linkElement = screen.getByText(/To /i);
  expect(linkElement).toBeInTheDocument();
});
test('renderes name field', () => {
  render(<Router><Operator /></Router>);
  const linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});
test('renderes mobile field', () => {
  render(<Router><Operator /></Router>);
  const linkElement = screen.getByText(/Mobile/i);
  expect(linkElement).toBeInTheDocument();
});
test('renderes email field', () => {
  render(<Router><Operator /></Router>);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});
