const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Api Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

// query params -  search params

app.get("/api/products/search", (req, res) => {
  // const singleProduct = products.find(({id}) => id === +req.params.productID);
  // if(singleProduct){
  //   res.json(singleProduct);

  // }else{
  //   res.status(404).send('product not found')
  // }
  const { key, limit } = req.query;
  let sortedProducts = [...products];
  if (key) {
    sortedProducts = sortedProducts.filter(({ name }) => {
      return name.startsWith(key);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit);
  }
  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("resourse not found");
});

app.listen(5000, (req, res) => {
  console.log("server is listening on 5000");
});
