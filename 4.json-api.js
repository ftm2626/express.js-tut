const express = require("express");
const { people, products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send(
    '<h1>Api Home Page</h1><a href="/api/products">products</a><br/><a href="/api/names">names</a><br/><a href="/api/people">people</a>'
  );
});

app.get("/api/names", (req, res) => {
  res.json([{ name: "john" }, { name: "jane" }]);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/people", (req, res) => {
  res.json(people);
});


app.all("*", (req, res) => {
  res.status(404).send("resourse not found");
});

app.listen(5000, (req, res) => {
  console.log("server is listening on 5000");
});
