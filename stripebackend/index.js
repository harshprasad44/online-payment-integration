const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config();
const stripe = require("stripe")(process.env.KEY);
const { v4: uuidv4 } = require("uuid");
uuidv4();
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

app.post("/email", (req, res) => {
  const msg = {
    to: req.body.to, // Change to your recipient
    from: "harsh@harshprasad.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.send("Sent email");
    })
    .catch((error) => {
      console.error(error);
    });
});

// listen
app.listen(8282, () => {
  console.log("Listening at port 8282");
});
