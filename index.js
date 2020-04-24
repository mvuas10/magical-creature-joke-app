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

function onListen() {
  console.log(`Listening on :${port}`);
}

app.listen(port, onListen);

app.get("/:age/:gender", (request, response) => {
  const { age, gender } = request.params;

  let joke;

  if (gender === "female") {
    joke = age < 30 ? jokes.unicorn_joke : jokes.gollum_joke;
  } else if (gender === "male") {
    joke = age > 30 ? jokes.mermaid_joke : jokes.cyclop_joke;
  } else {
    joke = jokes.phoenix_joke;
  }

  const page = `<html>
  <head>
    <title>Programing jokes</title>
  </head>
  <body>
    <h1>${joke.setup}</h1>
    <h1>${joke.punchline}</h1>
  </body>
</html>`;

  response.send(page);
});
