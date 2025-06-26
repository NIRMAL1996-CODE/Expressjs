
import express from "express";
const app = express();

//In the route path, you can write "normal URLs" (like `"/about"`) or "patterns" (like regex, string pattern) to match many similar URLs.

// Supported String Routes in Express 5, just remember string patterns (?, *, etc. in strings) are not for Express 5+.

app.get("/home", (req, res) => {
  res.send("Home Page");
});

// Regular Expression (Regex) Path,
// This regex matches any URL that starts with /user followed by one or more digits — like /user1, /user99,/user12345
app.get(/^\/user\d+$/, (req, res) => {
  res.send("Matched user with number, like /user1 or /user99");
});

//It matches URLs that start with /users/ and are followed by exactly 4 digits only — nothing more, nothing less.
// /users/1234 --- [0-9]{4} means any digits (0–9)
app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send("Working");
});


app.listen(3000, () => console.log("Server Up!"));