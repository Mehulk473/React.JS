import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          {/* Brand with Custom Styling */}
          <Navbar.Brand href="#home" style={{ fontWeight: "bold", color: "#ffc107" }}>
            PARAYA BANK
          </Navbar.Brand>

          {/* Toggle for Mobile Devices */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Links with Custom Styles */}
              <Nav.Link href="#home" className="text-light mx-2" style={{ fontWeight: "500" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="text-light mx-2" style={{ fontWeight: "500" }}>
                Stocks
              </Nav.Link>
              <Nav.Link href="#features" className="text-light mx-2" style={{ fontWeight: "500" }}>
                Loans
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-light mx-2" style={{ fontWeight: "500" }}>
                Transactions
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-light mx-2" style={{ fontWeight: "500" }}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
