const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Api Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

// product with no description
app.get("/api/products-no-desc", (req, res) => {
  const newP = products.map(({ image, id, name }) => {
    return { id, name, image };
  });
  res.json(newP);
});

// get one product - Route parameters

app.get("/api/products/:productID", (req, res) => {
  const singleProduct = products.find(({ id }) => id === +req.params.productID); //product id comes back as an string
  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).send("product not found");
  }
});

app.all("*", (req, res) => {
  res.status(404).send("resourse not found");
});

app.listen(5000, (req, res) => {
  console.log("server is listening on 5000");
});
