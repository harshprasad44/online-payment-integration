const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("pk_test_51J8hq2SFKDXtErfjmVAfvwIv4esMWrTQQCztHec2mwn6dhWdSLhq2K9wMap5zaRZtEncEELHUYeiNn7wa0lRdqZq00mGaZt4BE");
const { v4: uuidv4 } = require("uuid");
uuidv4();
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("It works!");
});

app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log("PRODUCT ", product);
  console.log("PRICE ", product.price);
  const idempotencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Your purchase of ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempotencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

// listen
app.listen(8282, () => {
  console.log("Listening at port 8282");
});
