const jokes = {
  unicorn_joke: {
    setup: "Whats the difference between an honest politician and a unicorn?",
    punchline: "Nothing, they're both fictional characters.",
    img1:
      "https://www.indiewire.com/wp-content/uploads/2017/04/screen-shot-2017-04-08-at-12-15-05-pm.png?resize=800,482",
    img2:
      "https://www.funnymemes.net/wp-content/uploads/2013/10/Politics-Memes---with-this-technology.jpeg",
  },
  gollum_joke: {
    setup: "Why was Gollum executed at a bar in Iraq?",
    punchline: "Because he asked for Ice-es",
    img1: "https://i.kym-cdn.com/photos/images/original/001/778/280/cca.jpg",
    img2: "https://i.imgflip.com/1vd1z3.jpg",
  },
  cyclop_joke: {
    setup: "What did the cyclops sailor say to his captain?",
    punchline: "Eye captain",
    img1: "http://cdn.funnyisms.com/be3d088a-ac74-4e8f-8e48-06c587a3b33c.jpg",
    img2: "https://i.imgflip.com/36ql4m.jpg",
  },
  mermaid_joke: {
    setup: "Where did the fisherman and mermaid meet?",
    punchline: "On line!",
    img1: "https://i.imgflip.com/39dwr4.jpg",
    img2:
      "https://i.chzbgr.com/full/8455249664/h69CDF191/the-grumpiest-mermaid",
  },
  phoenix_joke: {
    setup:
      "What award did Joaquin Phoenix win for his weight loss transformation into Arthur Fleck in Joker?",
    punchline: "Atrophy",
    img1: "https://i.kym-cdn.com/photos/images/original/001/615/315/f94.jpg",
    img2: "https://i.imgflip.com/3pewhf.jpg",
  },
};

const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

function onListen() {
  console.log(`Listening on :${port}`);
}

app.listen(port, onListen);

//Home page
app.get("/", (request, response) => {
  const page = `<html>
      <head>
        <title>Programing Jokes</title>
        <style>
        body {
          padding: 10vh 10vw;
          background-color: #fff;
          color: black;
          text-align: center;
        }

        form {

        }

        button {
          width: 17em;
      }

      .container{
        display:flex;

      }
      
      button{
        width: 17em;
        margin-left: 1em;
      }

        </style>
      </head>
      <body>
        <h1>Are you a magical creature yourself, click one of the buttons below to LOL on a magical creatures joke!</h1>
        <h2>Click one of the below 👇 for a LOL time</h1>
        
        <form>
        <div class="container">
        <button formaction="/25/female">Mermaid</button>
        <button formaction="/35/female">Phoenix</button>
        <button formaction="/25/male">Cyclop</button>
        <button formaction="/35/male">Gollum</button>
        <button formaction="/25/LGBT">Unicorn</button>
        </div>
        </form>

        <br>
        <img src="https://cdn.shopify.com/s/files/1/0295/1977/3833/files/Unicorn-Gif_49.gif?v=1581528018" alt="Unicorn">
      </body>

    </html>`;
  response.send(page);
});

//Other page
app.get("/:age/:gender", (request, response) => {
  const { age, gender } = request.params;

  let joke = selectJokeForAgeAndGender(age, gender, jokes);

  const page = render(joke);
  response.send(page);
});

function render(joke) {
  const { setup, punchline, img1, img2 } = joke;
  const page = `<html>
  <head>
    <title>Programing jokes</title>
      ${makeStyle()}
  </head>
  <body>
      ${displayJokes(joke)}
  </body>
</html>`;
  return page;
}

function makeStyle() {
  console.log("style");
  return `<style>
      body {
        padding: 5% 10%;
      }

      h1 {
        text-align: center;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
          width: 35vw;
          padding: 7vh; 7vw;
      } 
    </style>`;
}

function displayJokes(joke) {
  console.log("Display joke");
  const { setup, punchline, img1, img2 } = joke;
  return `
  <h1>${setup}</h1>
  <h1>${punchline}</h1>
  <div>
  <img src="${img1}"/>
  <img src="${img2}"/>
  </div>;
  `;
}

function selectJokeForAgeAndGender(age, gender, jokes) {
  if (gender === "female") {
    return age < 30 ? jokes.mermaid_joke : jokes.phoenix_joke;
  } else if (gender === "male") {
    return age > 30 ? jokes.gollum_joke : jokes.cyclop_joke;
  } else if (age < 30 && gender === "LGBT") {
    return jokes.unicorn_joke;
  }
}
