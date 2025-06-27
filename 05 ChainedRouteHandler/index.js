import express from "express";
const app = express();

// app.route returns a instance of a single route, which you can then use to handle HTTP methods, with optional middleware.
// We use (app.route) to avoide duplicate code.

// Ugly Code
// app.get('/student', (req, res) => {
//   res.send('All Student')
// })

// app.post('/student', (req, res) => {
//   res.send('Add new Student')
// })

// app.put('/student', (req, res) => {
//   res.send('Add new Student')
// })

// Refactor
app
  .route("/student")

  // This runs when you visit http://localhost:3000/student in the browser
  .get((req, res) => res.send("All Students"))

  // These methods (POST, PUT, DELETE) will NOT run in browser directly.
  // You need tools like Postman or frontend fetch/AJAX to test them.

  .post((req, res) => res.send("Add new Student"))     // Sent when user submits new student
  .put((req, res) => res.send("Update Student"))       // Used to update full student data
  .delete((req, res) => res.send("Remove Student"));   // Used to delete a student


app.listen(3000, () => console.log("Server Up!"));