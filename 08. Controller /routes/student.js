// 1. Import express
import express from "express";

// 2. Import controller functions
import { allStudents, newStudent, updateStudent, deleteStudent } from "../controller/student.js";

// 3. Create router object (small express app)
const router = express.Router();

// 4. Routes connected with their controllers.CRUD = Concept
//  These are the actions your app performs:
//  Create -- GET all students
//  Read --POST to create new student
//  Update --PUT/PATCH to update student
//  Delete --PUT to delete student (can use DELETE too)
//  HTTP methods = How we perform CRUD.

router.get("/all", allStudents);       // GET all students
router.post("/create", newStudent);    // POST to create new student
router.put("/update", updateStudent);  // PUT to update student
router.put("/delete", deleteStudent);  // PUT to delete student (can use DELETE too)

// 5. Export router to use in main app file
export default router;
