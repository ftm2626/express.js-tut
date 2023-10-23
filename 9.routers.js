const express = require("express");
const app = express();
const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");

app.use("/api/people", peopleRouter); //use router - > apply to the ones start with 'api/people'
app.use("/api/login", authRouter);

app.listen(5000, (req, res) => {
  console.log("server is listening on 5000");
});
