import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";

function App({ history }) {
  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "facebook",
  });

  const [success, setSucceess] = useState(false);

  // useEffect(() => {
  //   if (success) {
  //     <Redirect to="/success" />;
  //   }
  // }, [success]);

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <StripeCheckout stripeKey="pk_test_51J8hq2SFKDXtErfjmVAfvwIv4esMWrTQQCztHec2mwn6dhWdSLhq2K9wMap5zaRZtEncEELHUYeiNn7wa0lRdqZq00mGaZt4BE" token={makePayment} name="Buy React" amount={product.price * 100} shippingAddress billingAddress>
          <button className="btn-large green">Buy Now</button>
        </StripeCheckout>

        {success && <a href="/success">Success</a>}
      </header>
    </div>
  );
}

export default App;
