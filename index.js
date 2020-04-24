const joke = {
  joke_1: {
    setup: "What do you call a boommeran that doesn't work?",
    punchline: "A stick",
  },
  joke_2: {
    setup: "The same bike tries to run me down every day.",
    punchline: "Sounds like a vicious cycle",
  },
  joke_3: {
    setup: "What do you call a guy who's had too much to drink?",
    punchline: "A cab",
  },
  joke_4: {
    setup: "What kinds of tree has a hand?",
    punchline: "A palm tree",
  },
  joke_5: {
    setup: "How does the solor system organize a party?",
    punchline: "They planet!",
  },
};

const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on: ${port}`);
});

app.get("/jokes/:name/:age/:pinapplePizza", otherPagesURL);

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
    response.send(page);
  } else if (age <= 30 && pinapplePizza === "no") {
    response.send(jokeTwoPageDesign);
  } else if (age > 30 && pinapplePizza === "yes") {
    response.send(jokeThreePageDesign);
  } else if (age > 30 && pinapplePizza === "no") {
    response.send(jokeFourPageDesign);
  }

  const page = render(joke);
};

function render(joke) {
  const jokeOnePageDesign = `<html>
    <head>
      <title>Hello you with age</title>
    </head>
    <body>
      <h1>${joke.joke_1}</h1>
      <img src="${img}"/>
    </body>
  </html>`;

  return jokeOnePageDesign;
}

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
