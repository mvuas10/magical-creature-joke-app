const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on: ${port}`);
});

const joke = {
  joke_1: "What do you call a boommeran that doesn't work? A stick",
  joke_2:
    "The same bike tries to run me down every day. Sounds like a vicious cycle",
  joke_3: "What do you call a guy who's had too much to drink? A cab",
  joke_4: "What kinds of tree has a hand? A palm tree",
  joke_5: "How does the solor system organize a party? They planet!",
};

const mainPageDesign = `<html>
    <head>
      <title>Hello you!</title>
    </head>
    <body>
      <h1>Welcome to my joke app!</h1>
    </body>
  </html>`;

const mainPageURL = (request, response) => {
  response.send(mainPageDesign);
};

app.get("/jokes", mainPageURL);

app.get("/jokes/:age", (request, response) => {
  const age = parseInt(request.params.age);

  console.log("Request...");
  //If age is <= 30 then tell joke 1
  //If age is > 30 then tell joke 2
  if (age <= 30) {
    response.send(joke.joke_1);
  } else {
    response.send(joke.joke_3);
  }
});
