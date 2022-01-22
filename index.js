const express = require("express");

const app = express();

function dowork(duration) {
   let start = Date.now();

   while (Date.now() - start < duration) {}
}

app.get("/", (req, res) => {
   dowork(5000);
   res.send("Hi there");
});

app.listen(3000);
