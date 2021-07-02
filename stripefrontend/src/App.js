import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";

function App() {
  const [product, setProduct] = useState({
    name: "React from FB",
    price: 10,
    productBy: "facebook",
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a className="App-link" href="#" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <StripeCheckout stripeKey="" token="" name="Buy React">
          <button className="btn-large green">Buy Now</button>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default App;
