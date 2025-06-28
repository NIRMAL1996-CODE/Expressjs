import express from "express";
import userDetails from "./middleware/logs.js";
const app = express();

// function userDetails(req, res, next) {
//   console.log("username: (alex)");
//   console.log("email: (alex21@gmail.com)");
//   console.log("password: (alex214)");
//   console.log("age: (18)");
//   next();
// }
// // Syntax: app.get(path, middlewareFunction, routeHandler)
// app.get('/admin', userDetails, (req, res) => {
//   // 1. First, Express checks the path '/admin'
//   // 2. It runs userDetails middleware (logs fake user info)
//   // 3. After middleware calls next(), it comes here
//   // 4. Then sends response: <h2>Hello Admin </h2> to browser
//   res.send("<h2>Hello Admin </h2>");
// });

// app.get('/alex', userDetails, (req, res) => {
//   res.send("<h2>Hello Alex</h2>")
// })

// Apply middleware to every incoming request
//Middleware is like a helper function that runs before routes, often used for logging, auth, etc.
// Middleware runs BEFORE routes

// app.use() is used to apply middleware in Express.
// It runs before any route and can:
// Log requests
// Check authentication
// Modify req or res
// So it’s like a gatekeeper that checks or logs every request first.

//**Destructuring**
app.use(userDetails);

app.get("/", (req, res)=>{
  res.send("<h1>This is a homepage</h1>")
});

app.listen(3000, ()=>{
  console.log("server up");
})