const express = require("express");
const app = express();
const { people } = require("./data");

//static assets
app.use(express.static("./public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

// get method
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
// parse json
app.post("/api/people", (req, res) => {
  res.status(201).send("{ success: true, data: people }");
});

app.post("/login", (req, res) => {
  // console.log(req.body) // get form data with app.use-urlencoded
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }
  res.status(401).send("please enter name");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});


app.listen(5000, (req, res) => {
  console.log("server is listening on 5000");
});
