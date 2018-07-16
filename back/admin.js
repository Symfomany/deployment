const express = require("express");
const app = express();
const cors = require("cors");
const compression = require("compression");

app.use(cors());
app.use(compression());

app.get("/", (req, res) => {
  res.send("Je suis privé");
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
