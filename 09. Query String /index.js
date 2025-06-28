//A query string is the part after ? in a URL used to send extra data to the server.
//Example: /product?category=phone → req.query.category gives "phone"

// 1. Import express module (to create server and routes)
import express from "express";

// 2. Create main express app
const app = express();

// // 3. Route: GET request at "/product"
// // When user visits: /product?category=phone
// app.get("/product", (req, res) => {
  
//   // 4. Log the full query object in terminal
//   // Example: { category: 'phone' }
//   console.log(req.query);

//   // 5. Send a response showing the category value
//   // Example response: "response ok phone"
//   res.send(`response ok ${req.query.category}`);
// });

// **Destructuring**
//URL: /product?category=phone
//Output: Product Category phone
//This uses destructuring to extract category directly from req.query.
// app.get("/product", (req, res) => {
//   const { category } = req.query; // 👈 pulls 'category' from query string
//   res.send(`Product Category ${category}`); // 👈 responds with the value
// });

// **Route to handle multiple query string values**
// Example URL: /product?category=phone&id=101
app.get("/product", (req, res) => {

  // Destructure values from query string object
  // req.query = { category: 'phone', id: '101' }
  const { category, id } = req.query;

  // Send a response using both values
  // Output: Product Category phone & Product ID: 101
  res.send(`Product Category ${category} & Product ID: ${id}`);
});

// 6. Start server on port 3000
app.listen(3000, () => console.log("server up"));
