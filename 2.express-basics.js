const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.all("*", (req, res) => {
  res.status(404).send("404 not found");
});

app.listen(5000, (req, res) => {
  console.log("server is listening on 5000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
