import express from "express";
const app = express();

// ✅ GET - used to fetch data (e.g., open a page or get products)
app.get("/get", (req, res) => {
  res.send("<h1>GET</h1>");
});

// ✅ POST - used to create new data (e.g., create user, post form)
app.post("/post", (req, res) => {
  res.send("<h1>POST</h1>");
});

// ✅ PUT - used to replace/update full data
app.put("/put", (req, res) => {
  res.send("<h1>PUT</h1>");
});

// ✅ PATCH - used to update partial data
app.patch("/patch", (req, res) => {
  res.send("<h1>PATCH</h1>");
});

// ✅ DELETE - used to delete data
app.delete("/delete", (req, res) => {
  res.send("<h1>DELETE</h1>");
});

// ✅ Start server
app.listen(3000, () => console.log("Server Up!"));
