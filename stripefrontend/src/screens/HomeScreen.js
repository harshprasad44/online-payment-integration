import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen = ({ history }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/summary");
  };

  return (
    <div className="homeScreenForm">
      <Form onSubmit={submitHandler} className="formTag">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control required placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control required />
          </Form.Group>
        </Form.Row>

        <Button type="submit" variant="primary">
          Proceed to Pay
        </Button>
      </Form>
    </div>
  );
};

export default HomeScreen;
