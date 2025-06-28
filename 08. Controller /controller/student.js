
// We create controller functions like this to keep our code clean, simple, and organized.
// Instead of writing all logic inside routes, we move the logic to separate functions (called controllers).
// This makes it easier to manage, reuse, and understand the code — especially when the project grows big.
// It follows the separation of concerns (har kaam alag file me), which is a good coding habit.

// 1. No need to import express in controller file (not used here)
// import express from "express";

// 2. Controller function to get all students
const allStudents = (req, res) => {
  res.send("All Student");
};

// 3. Controller function to add a new student
const newStudent = (req, res) => {
  res.send("New Student created");
};

// 4. Controller function to update a student
const updateStudent = (req, res) => {
  res.send("Student updated");
};

// 5. Controller function to delete a student
const deleteStudent = (req, res) => {
  res.send("Student Deleted");
};

// 6. Export all controller functions to use in route file
export { allStudents, newStudent, updateStudent, deleteStudent };
