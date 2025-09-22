function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 80,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#input");
  let apiKey = "83a222ot49ddfde0622ffadcc7bfbdb5";
  let prompt = `User instructions: generate a poem in English about ${instructionsInput.value}`;
  let context =
    "You are a poem expert. You like to write nostalgic poems in the style of James Joyce. You should generate a 4 line poem and seperate each line with <br/>. For each poem create a matching title and include it at the beginning inside <strong>. Seperate the title from the poem with a <br/>. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Give me but a moment whilst I weave thy verses!";

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
