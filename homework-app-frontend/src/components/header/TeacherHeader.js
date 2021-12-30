import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { authenticationRefreshAction } from "../../redux/auth/actions";

function Header() {

  const refresh = useSelector((state) => state.auth.refresh);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticationRefreshAction());
    console.log(refresh)
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
          <Navbar.Text className="mx-2">{refresh && refresh.username }</Navbar.Text>
  
      <button className="btn btn-outline-success mx-2" type="button">Log out</button>
    </Navbar>
      </>
    </div>
  );
}

export default Header;
