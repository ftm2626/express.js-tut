const express = require("express");
const router = express.Router();


router.post("/", (req, res) => {
  // console.log(req.body) // get form data with app.use-urlencoded
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }
  res.status(401).send("please enter name");
});

module.exports = router