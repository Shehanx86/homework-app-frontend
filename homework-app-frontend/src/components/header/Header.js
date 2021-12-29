import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home" className="mx-2">
            Homework App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/upcoming">Upcoming Tasks</Nav.Link>
            <Nav.Link href="/missed">Missed Tasks</Nav.Link>
          </Nav>
        </Navbar>
      </>
    </div>
  );
}

export default Header;
