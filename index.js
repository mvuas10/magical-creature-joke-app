const jokes = {
  unicorn_joke: {
    setup: "Whats the difference between an honest politician and a unicorn?",
    punchline: "Nothing, they're both fictional characters.",
  },
  gollum_joke: {
    setup: "Why was Gollum executed at a bar in Iraq?",
    punchline: "Because he asked for Ice-es",
  },
  cyclop_joke: {
    setup: "What did the cyclops sailor say to his captain?",
    punchline: "Eye captain",
  },
  mermaid_joke: {
    setup: "Where did the fisherman and mermaid meet?",
    punchline: "On line!",
  },
  phoenix_joke: {
    setup:
      "What award did Joaquin Phoenix win for his weight loss transformation into Arthur Fleck in Joker?",
    punchline: "Atrophy",
  },
};

const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on: ${port}`);
});

app.get("/:age/:magicalCreature", otherPagesURL);

const otherPagesURL = (request, response) => {
  const { age, magicalCreature } = request.params;

  let joke;

  if (magicalCreature === "unicorn") {
    joke = age <= 30 ? jokes.unicorn_joke : jokes.joke_2;
  } else if (magicalCreature === "") console.log(request.params.age);
  console.log(request.params.magicalCreature);
  response.send("hello world");
};

// //Main page of the joke app
// app.get("/jokes", mainPageURL);
// const mainPageDesign = `<html>
//     <head>
//       <title>Hello you</title>
//     </head>
//     <body>
//       <h1>Welcome to my joke app!</h1>
//       <p>Paste your answer at the end of the URL</>
//       <p>/Name/Age/"Yes" if you like pinapple on pizza and "No" if you don't like pinapple on pizza</p>
//     </body>
//   </html>`;

// const mainPageURL = (request, response) => {
//   response.send(mainPageDesign);
// };

// //Other pages of the joke app
// const otherPagesURL = (request, response) => {
//   const name = request.params.name;
//   const age = parseInt(request.params.age);
//   const pinapplePizza = request.params.pinapplePizza;

//   //Pinapple on age, pizza or not
//   console.log("Request...");
//   if (age <= 30 && pinapplePizza === "yes") {
//     response.send(page);
//   } else if (age <= 30 && pinapplePizza === "no") {
//     response.send(jokeTwoPageDesign);
//   } else if (age > 30 && pinapplePizza === "yes") {
//     response.send(jokeThreePageDesign);
//   } else if (age > 30 && pinapplePizza === "no") {
//     response.send(jokeFourPageDesign);
//   }

//   const page = render(joke);
// };

// function render(joke) {
//   const jokeOnePageDesign = `<html>
//     <head>
//       <title>Hello you with age</title>
//     </head>
//     <body>
//       <h1>${joke.joke_1}</h1>
//       <img src="${img}"/>
//     </body>
//   </html>`;

//   return jokeOnePageDesign;
// }

// const jokeTwoPageDesign = `<html>
// <head>
//   <title>Hello you with age</title>
// </head>
// <body>
//   <h1>${joke.joke_2}</h1>
// </body>
// </html>`;

// const jokeThreePageDesign = `<html>
// <head>
//   <title>Hello you with age</title>
// </head>
// <body>
//   <h1>${joke.joke_3}</h1>
// </body>
// </html>`;

// const jokeFourPageDesign = `<html>
// <head>
//   <title>Hello you with age</title>
// </head>
// <body>
//   <h1>${joke.joke_4}</h1>
// </body>
// </html>`;
