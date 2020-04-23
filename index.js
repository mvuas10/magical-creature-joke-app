const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on: ${port}`);
});

app.get("/jokes", (request, response) => {
  console.log("Request...");
  response.send("Hello World!");
});
