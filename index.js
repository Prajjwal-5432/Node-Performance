const cluster = require("cluster");

const express = require("express");
const app = express();

// If the file is being executed in Master mode
if (cluster.isMaster) {
   //Cause index.js to be excecuted again in child mode
   cluster.fork();
} else {
   //Im a child, Im going to act like a server and do nothing else
   function dowork(duration) {
      let start = Date.now();

      while (Date.now() - start < duration) {}
   }

   app.get("/", (req, res) => {
      dowork(5000);
      res.send("Hi there");
   });

   app.listen(3000);
}
