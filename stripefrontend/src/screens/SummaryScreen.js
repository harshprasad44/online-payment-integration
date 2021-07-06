import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Row, Col, ListGroup, Card } from "react-bootstrap";

function SummaryScreen({ history }) {
  const [product, setProduct] = useState({
    name: "Online Payment Integration",
    price: 10,
    productBy: "Harsh Prasad",
  });

  const [success, setSucceess] = useState(false);

  useEffect(() => {
    if (success) {
      history.push("success");
    }
  }, [success, history]);

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
        setSucceess(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Name</h2>
              <p>HERE</p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Email</h2>
              <p>HERE</p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Address</h2>
              <p>HERE</p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              HERE
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <header className="App-header">
        <StripeCheckout
          stripeKey="pk_test_51J8hq2SFKDXtErfjmVAfvwIv4esMWrTQQCztHec2mwn6dhWdSLhq2K9wMap5zaRZtEncEELHUYeiNn7wa0lRdqZq00mGaZt4BE"
          token={makePayment}
          name="Online Payment Integration"
          amount={product.price * 100}
          shippingAddress
          billingAddress
        >
          <button className="btn-large green">Make Payment</button>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default SummaryScreen;
