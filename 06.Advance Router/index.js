// 1. Create routes folder and put your routes in a seperate file.
// 2. Create instance of express.Router()
// 3. Instead of app.method change that to "router.method"
// 4. Export router from a specific file
// 5. Import route in index.js file
// 6. use the (app.use) built-in middleware & provide your routes.

import express from "express"; 
// Load Express framework

//// Import student router from student.js and teacher.js
import students from "./routes/student.js"; 
import teacher from "./routes/teacher.js"; 

const app = express(); 
// Create Express app instance (main server object)


// Load Router Modules
app.use("/students", students); 
// Mount student routes under /students (e.g. /students/all)

app.use("/teacher", teacher); 
// Mount teacher routes under /teacher (e.g. /teacher/create)

app.listen(3000, () => console.log("Server Up!")); 
// Start server on port 3000

