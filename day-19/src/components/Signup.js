import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    accountType: "",
    fullAddress: "",
    termsAccepted: false, // New field for terms and conditions
  });

  const [showTerms, setShowTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example of form validation
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    // Handle the form submission logic
    console.log("Form submitted", formData);
  };

  return (
    <Container className="pt-5">
     
      <Row className="justify-content-center">
        <Col md={6} className="shadow p-4 bg-white rounded">
          <h2 className="text-center mb-4 text-primary">Bank Signup Form</h2>
          <Form onSubmit={handleSubmit}>
            {/* Full Name */}
            <Form.Group controlId="formFullName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                style={{ border: "1px solid #ced4da" }}
              />
            </Form.Group>

            {/* Email */}
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ border: "1px solid #ced4da" }}
              />
            </Form.Group>

            {/* Phone Number */}
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{ border: "1px solid #ced4da" }}
              />
            </Form.Group>

            {/* Account Type - Radio Buttons */}
            <Form.Group controlId="accountType" className="mb-3">
              <Form.Label>Account Type</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Saving"
                  name="accountType"
                  value="Saving"
                  onChange={handleChange}
                  required
                  className="mb-2"
                />
                <Form.Check
                  type="radio"
                  label="Current"
                  name="accountType"
                  value="Current"
                  onChange={handleChange}
                  required
                  className="mb-2"
                />
              </div>
            </Form.Group>

            {/* Full Address */}
            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Full Address</Form.Label>
              <Form.Control
                type="text"
                name="fullAddress"
                placeholder="Enter your full address (Street, City, State, Zip Code)"
                value={formData.fullAddress}
                onChange={handleChange}
                required
                style={{ border: "1px solid #ced4da" }}
              />
            </Form.Group>

            {/* Terms and Conditions */}
            <Form.Group controlId="formTerms" className="mb-3">
              <Form.Check
                type="checkbox"
                label={
                  <>
                    I accept the{" "}
                    <span
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowTerms(true)}
                    >
                      terms and conditions
                    </span>
                  </>
                }
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Terms and Conditions Modal */}
      <Modal show={showTerms} onHide={() => setShowTerms(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Please read our terms and conditions carefully before signing up.
            You must accept these terms in order to create an account.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTerms(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Signup;
