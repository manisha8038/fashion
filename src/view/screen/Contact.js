import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
function Contact() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };
  return (
    <div className="container">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
              />
            </Form.Group>

            <Button className="cbtn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {showAlert && (
            <Alert
              className="mt-4"
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Response recorded, Thank You!
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
export default Contact;
