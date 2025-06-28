//create middleware and export
function userDetails(req, res, next) {
  //  This will show user info in terminal (like tracking)
  console.log("username: (alex)");
  console.log("email: (alex21@gmail.com)");
  console.log("password: (alex214)");
  console.log("age: (18)");

  // This tells Express to move to the next step (route or next middleware)
  next();
}

export default userDetails;