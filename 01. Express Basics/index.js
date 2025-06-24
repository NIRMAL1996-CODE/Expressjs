// 1.  Create folder --- npm init -y
// 2. Install express (npm install express)
// 3. Get Express Into Your Project (require("express"))
// 4. Create instance of Express (const app = express())
// 5. Provide port (app.listen(8000, () => console.log("port 8000")))
// 6. basic rout (app.get(path, callback))

// Import express module
import express from "express";

// Create an express app instance
const app = express();

// Define a GET route for the home page
app.get("/", (req, res) => {
  // Send a response to the client
  res.send("Welcome to Express.js");
});

// Start the server on port 8000
app.listen(8000, () => console.log("Server up!"));
