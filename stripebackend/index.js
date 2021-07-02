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

// listen
app.listen(8282, () => {
  console.log("Listening at port 8282");
});
