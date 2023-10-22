const express = require("express");
const app = express();
const { people } = require("./data");

//static assets
app.use(express.static('./public'))

//parse form data
app.use(express.urlencoded({extended:false}))

// get method
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/login',(req,res)=>{
  // console.log(req.body) // get form data with app.use-urlencoded
  const {name} = req.body
  if (name) {
    return res.status(200).send(`welcome ${name}`)
  }
   res.status(401 ).send('please enter name')
})

app.listen(5000, (req, res) => {
  console.log("server is listening on 5000");
});
