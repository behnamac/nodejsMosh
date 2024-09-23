const fs = require("fs");

// Synchronous Method (Bad Practice)
// const file = fs.readdirSync("./");
// console.log(file);

// Asynchronous Method (Good Practice)
fs.readdir("./", function (err, file) {
  if (err) console.log("Error", err);
  else console.log("Result", file);
});
