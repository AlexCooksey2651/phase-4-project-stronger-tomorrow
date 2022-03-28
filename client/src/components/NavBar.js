import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'

function NavBar({ user, setUser, handleLogout }) {
  // function handleLogout() {
  //   fetch('/logout', {
  //     method: "DELETE"
  //   })
  //     .then(r => {
  //       if (r.ok) {
  //         setUser(null)
  //       }
  //     })
  // }

  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/record_new_lift">Record New Lift</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link id="logout-button" onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;