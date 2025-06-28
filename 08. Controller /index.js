// 1. Import express
import express from "express";

// 2. Import student router (must be added!)
import student from "./routes/student.js";

// 3. Create express app
const app = express();

// 4. Use router for student-related routes
// Controllers can group related request handling logic separately.
// Instead of writing all logic in this file, we organize it using controller modules.

app.use("/student", student); //It says: All routes in "student router" will now start with /student.

// 5. Start the server
app.listen(3000, () => {
  console.log("server up");
});
