// AppNavbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useAuth } from './AuthContext'; // Adjust the path as necessary
import "./Navbar.css";

function AppNavbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from your context
    navigate('/login'); // Redirect to the login page
  };

  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Elansol Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user && <Nav.Link as={Link} to="/">Register</Nav.Link>}
            {!user && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
            {user && <Button onClick={handleLogout} variant="outline-danger">Logout</Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
