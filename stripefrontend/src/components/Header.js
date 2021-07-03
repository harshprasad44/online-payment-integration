import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar style={{ height: "90px" }} bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <LinkContainer to="/">
            <Navbar.Brand>
              <i style={{ color: "black" }} className="fas fa-credit-card"></i>
              <span style={{ color: "black", fontFamily: "cursive" }}> Online Payment Integration</span>
            </Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
