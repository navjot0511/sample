import React from "react";
import { Nav, NavLink, NavMenu, LogoWrapper } from "./navbarElements";
import { Row, Col } from "react-bootstrap";
import navbarLogo from "../assets/navbar-logo.png";
const Navbar = () => {
  return (
    <Row className="m-0">
      <Col sm={5} className="p-0">
        <Nav>
          <NavMenu>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="#">Products</NavLink>
          </NavMenu>
        </Nav>
      </Col>
      <Col sm={2} className="p-0">
        <Nav style={{ display: "flex", justifyContent: "center" }}>
          <LogoWrapper>
            <img
              height="100px"
              width="100px"
              src={navbarLogo}
              alt="navbar-logo"
            ></img>
          </LogoWrapper>
        </Nav>
      </Col>
      <Col sm={5} className="p-0">
        <Nav>
          <NavMenu>
            <NavLink to="#">Events</NavLink>
            <NavLink to="#">Infrastructure</NavLink>
            <NavLink to="#">Contact us</NavLink>
          </NavMenu>
        </Nav>
      </Col>
    </Row>
  );
};

export default Navbar;
