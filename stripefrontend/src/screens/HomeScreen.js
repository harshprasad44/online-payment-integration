import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "../actions/userActions";

const HomeScreen = ({ history }) => {
  // const userInfo = useSelector((state) => state.userInfo);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveUserInfo({ name, email, address, address2, city, postalCode, summary: true }));
    history.push("/summary");
  };

  return (
    <div className="homeScreenForm">
      <Form onSubmit={submitHandler} className="formTag">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            required
            placeholder="1234 Main St"
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            type="text"
            placeholder="Apartment, studio, or floor"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control value={city} onChange={(e) => setCity(e.target.value)} type="text" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control value={postalCode} onChange={(e) => setPostalCode(e.target.value)} type="text" required />
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
