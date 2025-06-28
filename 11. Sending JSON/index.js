//res.json() sends data from backend to frontend (or Postman) in JSON format.
import express from "express";
import product from "./products.js";
const app =express();

app.get("/products",(req, res)=>{
  res.json(product);
})
app.listen(3000, ()=>{
  console.log("server up!");
});

// What is JSON Formatter?
// A JSON formatter is a tool that:
      //1.Takes raw or messy JSON data
      //2.Makes it easy to read by formatting it with proper indentation and structure
      //3.Often highlights keys and values with colors


// res.send({}) may show [object Object] in browser (not proper format)
// res.json({}) sends clean, readable JSON like { "name": "Nirmal" }
// res.json() also sets correct headers (Content-Type: application/json)
// Use res.json() when sending data
// Use res.send() for text, HTML, or files      