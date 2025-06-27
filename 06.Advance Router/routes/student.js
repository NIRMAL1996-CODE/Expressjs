import express from "express"; 
// Load Express

const router = express.Router(); 
// Create a mini Express router (not the full app)

// Handle GET request to /students/all
router.get("/all", (req, res) => {
  res.send("All Students");
});

// Handle POST request to /students/create
router.post("/create", (req, res) => {
  res.send("New Student created");
});

// Handle PUT request to /students/update
router.put("/update", (req, res) => {
  res.send("Student updated");
});

// Handle PUT request to /students/delete
router.put("/delete", (req, res) => {
  res.send("Student Deleted");
});

export default router; 
// Export the router so it can be used in index.js
