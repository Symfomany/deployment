const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World !!");
});

app.get("/coucou", (req, res) => {
  res.json("Coucou, tu veux voir Giorgi Armano ?!");
});

app.get("/test", (req, res) => {
  res.json("ceci est un test!");
});

app.listen(4000, () => {
  console.log("Example app listening on port 4000!");
});
