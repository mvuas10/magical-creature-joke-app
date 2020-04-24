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

//Main page of the joke app
const mainPageDesign = `<html>
    <head>
      <title>Hello you</title>
    </head>
    <body>
      <h1>Welcome to my joke app!</h1>
      <p>Paste your answer at the end of the URL</>
      <p>/Name/Age/"Yes" if you like pinapple on pizza and "No" if you don't like pinapple on pizza</p>
    </body>
  </html>`;

const mainPageURL = (request, response) => {
  response.send(mainPageDesign);
};

app.get("/jokes", mainPageURL);

//Other pages of the joke app
const otherPagesURL = (request, response) => {
  const name = request.params.name;
  const age = parseInt(request.params.age);
  const pinapplePizza = request.params.pinapplePizza;

  //Pinapple on age, pizza or not
  console.log("Request...");
  if (age <= 30 && pinapplePizza === "yes") {
    response.send(jokeOnePageDesign);
  } else if (age <= 30 && pinapplePizza === "no") {
    response.send(jokeTwoPageDesign);
  } else if (age > 30 && pinapplePizza === "yes") {
    response.send(jokeThreePageDesign);
  } else if (age > 30 && pinapplePizza === "no") {
    response.send(jokeFourPageDesign);
  }
};

const jokeOnePageDesign = `<html>
    <head>
      <title>Hello you with age</title>
    </head>
    <body>
      <h1>${joke.joke_1}</h1>
    </body>
  </html>`;

const jokeTwoPageDesign = `<html>
<head>
  <title>Hello you with age</title>
</head>
<body>
  <h1>${joke.joke_2}</h1>
</body>
</html>`;

const jokeThreePageDesign = `<html>
<head>
  <title>Hello you with age</title>
</head>
<body>
  <h1>${joke.joke_3}</h1>
</body>
</html>`;

const jokeFourPageDesign = `<html>
<head>
  <title>Hello you with age</title>
</head>
<body>
  <h1>${joke.joke_4}</h1>
</body>
</html>`;

app.get("/jokes/:name/:age/:pinapplePizza", otherPagesURL);
