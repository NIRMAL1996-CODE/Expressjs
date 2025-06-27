// Route callback can be in the form of
//  - Single Callback Function
//  - More then one callback
//  - Array Of Function
//  - Combination Of Both
import express from "express";
const app = express();

//single Callback Function
app.get("/single-cb", (req,res)=>{
  res.send("hey this is single callback");
});

// More Then One Callback
//  - You cannot post response two times 
//  - Don't forget to pass the "next" function 
//  - (next) function will allows us to run another cb. 
//  - here in the first callback you can put your (logic) 

//More then one callback
app.get("/double-cb", (req, res, next)=>{
  res.send("hey this is First callback");
  next();
},
(req, res)=>{
    res.send("hey this is second callback");
});
// Yes, the first can do it, but using next() lets us split logic — like checking, logging, validating — and keep final response separate.The next function in Express that tells the app to move to the next middleware or route handler in line.
app.listen(3000,()=>console.log("server up"));