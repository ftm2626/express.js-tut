const express = require("express");
const { products } = require("./data");
const app = express();

// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  res.send("testing");
  // next() -> go to next function
};

app.get("/", logger, (req, res) => {
  res.send("home");
});
app.use("/api", logger); //apply  it to the rest of the routes, all of them!

app.get("/about", (req, res) => {
  res.send("about");
});
app.all("*", (req, res) => {
  res.status(404).send("resourse not found");
});

app.listen(5000, (req, res) => {
  console.log("server is listening on 5000");
});
