// server.js
const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    id,
    name: `Pavan Belagatti #${id}`
  });
});

app.listen(81, () => {
  console.log("Server running on port 81");
});
