import express from "express"; // import express to create web server
import path from "path"; // import path to handle file paths

const app = express(); // create express app

// middleware to serve all static files (html, css, js, images) from public folder
app.use(express.static("./public")); 

// handle GET request to root path "/"
app.get("/", (req, res) => {
  // send index.html file as response
  // path.resolve gives correct full path (needed in some systems)
  // __dirname means current folder (but needs extra setup in ES Modules)
  // just sending HTML allows access to HTML + CSS + JS if they are in public folder.
  res.sendFile(path.resolve(__dirname, "./public/index.html")); 
});

// start server at port 3000
app.listen(3000, () => console.log("Server up!")); 
