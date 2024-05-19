import express from "express";
import { products } from "./data.js";

const app = express();

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

app.get("/products", (req, res) => {
  res.json(products);
});
