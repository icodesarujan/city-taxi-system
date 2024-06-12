import { render, screen } from '@testing-library/react';
import RegisterVehicles from '../RegisterVehicles';
import {BrowserRouter as Router}  from "react-router-dom";


test('renderes Taxi Registration Number field', () => {
  render(<Router><RegisterVehicles /></Router>);
  const linkElement = screen.getByText(/Taxi Registration Number/i);
  expect(linkElement).toBeInTheDocument();
});
test('renderes Vehicle Model field', () => {
  render(<Router><RegisterVehicles /></Router>);
  const linkElement = screen.getByText(/Vehicle Model/i);
  expect(linkElement).toBeInTheDocument();
});
test('renderes Color field', () => {
  render(<Router><RegisterVehicles /></Router>);
  const linkElement = screen.getByText(/Color/i);
  expect(linkElement).toBeInTheDocument();
});
test('renderes Register Taxi button', () => {
  render(<Router><RegisterVehicles /></Router>);
  const linkElement = screen.getByText(/Register Taxi/i);
  expect(linkElement).toBeInTheDocument();
});
