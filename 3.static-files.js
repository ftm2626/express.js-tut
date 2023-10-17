const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public")); //all the static files like css and images

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./test.html")); //file needs and absolute path
});

app.all("*", (req, res) => {
  res.status(404).send("resourse not found");
});

app.listen(5000, (req, res) => {
  console.log("server is listening on 5000");
});
