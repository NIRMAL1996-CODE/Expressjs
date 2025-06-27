import express from "express"; 
// Load Express

const router = express.Router(); 
// Create a mini router instance for teacher routes

router.get("/all", (req, res) => {
  res.send("All teachers");
});
// Responds to GET /teacher/all

router.post("/create", (req, res) => {
  res.send("New teacher created");
});
// Responds to POST /teacher/create

router.put("/update", (req, res) => {
  res.send("teacher updated");
});
// Responds to PUT /teacher/update

router.put("/delete", (req, res) => {
  res.send("teacher Deleted");
});
// Responds to PUT /teacher/delete

export default router; 
// Export router to be used in main index.js
