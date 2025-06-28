// 1. Import express
import express from "express";

// 2. Create main app
const app = express();

// **Dynamic routes**

// 3. Make a route with dynamic id
// When user visits /product/deleted/something → show "product deleted"
// NOTE: ":id" means placeholder (user can give anything here)
// Example: if user goes to /product/deleted/99 → ":id" = "99"

//// **Dynamic routes with single params**
// app.get("/product/deleted/:id", (req, res) => {
//   res.send("product deleted");
// });

// You can access this value using req.params
// app.get("/product/iphone/:id", (req, res)=>{
//   res.send(req.params.id);
// })

//destructuring
// ❌ You can't use res.send() twice in one response.
// app.get("/product/iphone/:id", (req, res)=>{
//   const {id} =req.params;
//   res.send(`product id = ${id}`);
// });

// **Dynamic routes with multiple params**
// app.get("/product/:model/:id", (req, res)=>{
//   const {id,model} =req.params;
//   res.send(`product id = ${id} and phone = ${model}`);
// });

//app.params
// It runs automatically when a specific param (like :id) is in the route.
// It's used to do something before the main route runs.
// Like a helper function just for that param.
app.param("id", (req, res, next, id)=>{
  console.log(`id: ${id}`);
  next();
})
app.get("/user/:id", (req, res)=>{
  console.log("This is user ID path");
  res.send("Response OK");
});

// 4. Start the server on port 3000
app.listen(3000, () => {
  console.log("server Up!");
});
