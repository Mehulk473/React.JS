import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5" style={{ backgroundColor: "#343a40", color: "#f8f9fa" }}>
      <Container>
        <Row>
          {/* About Us Section */}
          <Col md={4}>
            <h5 style={{ fontWeight: 'bold', color: "#ffc107" }}>About Us</h5>
            <p style={{ fontSize: "14px", lineHeight: "1.7" }}>
              We are a trusted bank providing reliable and secure banking solutions 
              to individuals and businesses. Our services include personal banking, 
              business banking, loans, and investment options.
            </p>
          </Col>

          {/* Services Section */}
          <Col md={4}>
            <h5 style={{ fontWeight: 'bold', color: "#ffc107" }}>Services</h5>
            <Nav className="flex-column">
              <Nav.Link href="#personal" className="text-white" style={{ marginBottom: "10px", fontSize: "14px" }}>
                Personal Banking
              </Nav.Link>
              <Nav.Link href="#business" className="text-white" style={{ marginBottom: "10px", fontSize: "14px" }}>
                Business Banking
              </Nav.Link>
              <Nav.Link href="#loans" className="text-white" style={{ marginBottom: "10px", fontSize: "14px" }}>
                Loans
              </Nav.Link>
              <Nav.Link href="#investments" className="text-white" style={{ marginBottom: "10px", fontSize: "14px" }}>
                Investments
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contact Section */}
          <Col md={4}>
            <h5 style={{ fontWeight: 'bold', color: "#ffc107" }}>Contact Us</h5>
            <p style={{ fontSize: "14px", lineHeight: "1.7" }}>
              123 Bank Street <br />
              Finance City, 45678 <br />
              Phone: (123) 456-7890 <br />
              Email: <a href="mailto:support@bankingsite.com" className="text-white" style={{ textDecoration: "underline" }}>support@bankingsite.com</a>
            </p>

            {/* Social Media Links */}
            <h6 style={{ fontWeight: 'bold', color: "#ffc107" }}>Follow Us</h6>
            <Nav>
              <Nav.Link href="https://facebook.com" className="text-white" style={{ fontSize: "14px" }}>
                <i className="fab fa-facebook"></i> Facebook
              </Nav.Link>
              <Nav.Link href="https://twitter.com" className="text-white" style={{ fontSize: "14px" }}>
                <i className="fab fa-twitter"></i> Twitter
              </Nav.Link>
              <Nav.Link href="https://linkedin.com" className="text-white" style={{ fontSize: "14px" }}>
                <i className="fab fa-linkedin"></i> LinkedIn
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <hr className="bg-white mt-4" style={{ border: "1px solid #ffc107" }} />

        {/* Footer Bottom */}
        <Row>
          <Col className="text-center">
            <p style={{ marginBottom: "0", fontSize: "12px" }}>
              &copy; {new Date().getFullYear()} Banking Site. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
