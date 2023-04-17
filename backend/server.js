const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  //   return res.send("done");
  return res.status(200).json({ message: "Done" });
});

app.listen(PORT, (req, res) => {
  console.log("server is listening to port " + PORT);
});
