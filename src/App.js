import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import RegisterVehicles from './pages/RegisterVehicles';
import { Route, Routes } from 'react-router-dom';
import Taxies from './pages/Taxies';
import Reservations from './pages/Reservations';

function App() {
  
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">City Taxi System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant='underline'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register-vehicles">Register Vehicle</Nav.Link>
            <Nav.Link href="/taxies">Taxies</Nav.Link>
            <Nav.Link href="/reservations">Reservations</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className='mt-5'>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/register-vehicles" element={<RegisterVehicles />} />
        <Route path="/taxies" element={<Taxies />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </Container>
    
    </div>
  );
}

export default App;
