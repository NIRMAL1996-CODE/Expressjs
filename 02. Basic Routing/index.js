console.log("hi");
import express from "express";

// ⬇️ It creates the main Express app to handle routes, requests, and responses.
//it's mandatory — without const app = express();, you can’t build the server.
//This app is the Express instance — it gives you all tools to make server, routes, etc.
const app =express();

//basic routing
app.get("/",(req, res)=>{
  res.send("<h1>HOME 🏠</h1>");
});

// Create a GET route for "/about" page
app.get("/about", (req, res) => {
  
  // Step 1: app.get() is used to handle GET requests from the browser
  // - GET means user is "asking" something from the server (like opening a webpage)

  // Step 2: "/about" is the path (URL route)
  // - This means when user goes to localhost:3000/about, this code will run

  // Step 3: (req, res) are two objects:
  // - req = request → info coming *from* browser (like what user typed or sent)
  // - res = response → what server *sends back* to browser

  // Step 4: res.send() is used to send the final response
  // - It can send plain text, HTML, or data (like JSON)
  // - Here, we’re sending a simple HTML heading

  res.send("<h1>About ℹ️ </h1>");
});

app.get("/contact",(req, res)=>{
  res.send("<h1>Contact ☎️ </h1>")
})

app.listen(3000,()=>console.log("server up"));

// Routing refers to how an application’s endpoints (URIs) respond to client requests.

// HTTP Methods
// GET👉 Retrive Data
// POST 👉 Create/Insert Data
// PUT 👉 Completely Update Data
// PATCH 👉 Partially Update Data
// DELETE 👉 Delete Data
// ALL 👉 Any HTTP Request Method