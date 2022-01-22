const cluster = require("cluster");

// If the file is being executed in Master mode
if (cluster.isPrimary) {
   //Cause index.js to be excecuted again in child mode
   cluster.fork();
   cluster.fork();
   cluster.fork();
   cluster.fork();
} else {
   const express = require("express");
   const app = express();

   //Im a child, Im going to act like a server and do nothing else
   function dowork(duration) {
      let start = Date.now();

      while (Date.now() - start < duration) {}
   }

   app.get("/", (req, res) => {
      dowork(5000);
      res.send("Hi there");
   });

   app.get("/fast", (req, res) => {
      res.send("This was fast");
   });

   app.listen(3000);
}
