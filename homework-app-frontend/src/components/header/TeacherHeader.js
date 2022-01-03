import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { authenticationRefreshAction } from "../../redux/auth/authActions";

function Header() {

  const data = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticationRefreshAction());
  }, []);

  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home" className="mx-2">
            Homework App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/stats">Homework stats</Nav.Link>
          </Nav>
          <Navbar.Text className="mx-2">{data && data.username }</Navbar.Text>
  
      <button className="btn btn-outline-success mx-2" type="button">Log out</button>
    </Navbar>
      </>
    </div>
  );
}

export default Header;
