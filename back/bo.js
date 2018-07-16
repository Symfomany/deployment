const express = require("express");
const app = express();
const cors = require("cors");
const compression = require("compression");

app.use(cors());
app.use(compression());

app.get("/", (req, res) => {
  res.send("Coucou je suis là!");
});

app.get("/hi", (req, res) => {
  res.send("Salut Juju 😁");
});

app.get("/api", (req, res) => {
  res.json([
    "One",
    "Two",
    "Three JS!",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Height",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve"
  ]);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
