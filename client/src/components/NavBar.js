import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from "react-bootstrap/Dropdown"



const linkStyles = {
  display: "inline-block",
  width: "200px",
  padding: "15px",
  margin: "6px 20px 6px",
  borderRadius: "2%",
  textDecoration: "none",
  color: "white",
};

function NavBar({ user, setUser }) {
  function handleLogout() {
    fetch('/logout', {
      method: "DELETE"
    })
      .then(r => {
        if (r.ok) {
          setUser(null)
        }
      })
  }

  return (
    <Navbar id="navbar" bg="black" expand={false}>
      <Container>
        <Dropdown>
          <div id="button-div">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>
          </div>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Nav.Link href="/record_new_lift">Record New Lift</Nav.Link>
            </Dropdown.Item>
            <Dropdown.Item >
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Dropdown.Item>
            <Dropdown.Item id="logout-button" onClick={handleLogout}>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
    // <Navbar bg="light" expand={false}>
    //   <Container fluid>
    //     <Navbar.Brand href="#"></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="offcanvasNavbar" />
    //     <Navbar.Offcanvas
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //       placement="end"
    //     >
    //       <Offcanvas.Header closeButton>
    //         <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
    //       </Offcanvas.Header>
    //       <Offcanvas.Body>
    //         <Nav className="justify-content-end flex-grow-1 pe-3">
    //           <Nav.Link href="/dashboard">Dashboard</Nav.Link>
    //           <Nav.Link href="/record_new_lift">Record New Lift</Nav.Link>
    //           <Nav.Link href="/profile">Profile</Nav.Link>
    //           <Button
    //             id="logout-button"
    //             onClick={handleLogout}
    //           >
    //             Logout
    //           </Button>
    //         </Nav>
    //       </Offcanvas.Body>
    //     </Navbar.Offcanvas>
    //   </Container>
    // </Navbar>
    // <div id="navbar">
    //   <NavLink 
    //     to="/dashboard" exact 
    //     style={linkStyles}
    //     activeStyle={{background: "lightslategrey",}}
    //   >
    //     <b>Dashboard</b>
    //   </NavLink>
    //   <NavLink 
    //     to="/record_new_lift" exact
    //     style={linkStyles}
    //     activeStyle={{background: "lightslategrey",}}
    //   >
    //     <b>Record New Lift</b>
    //   </NavLink>
    //   <NavLink 
    //     to="/profile" exact
    //     style={linkStyles}
    //     activeStyle={{background: "lightslategrey",}}
    //   >
    //     <b>Profile</b>
    //   </NavLink>
    //   <button
    //     id="logout-button"
    //     style={linkStyles}
    //     onClick={handleLogout}
    //     activeStyle={{background: "lightslategrey",}}
    //   >
    //     <b>Logout</b>
    //   </button>
    // </div>
  );
}

export default NavBar;