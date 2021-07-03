import React from "react";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar style={{ height: "90px" }} bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src="https://i.ibb.co/yRj7Bvh/new-logo-01.png" width="100px" alt="Logo" />
            </Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
