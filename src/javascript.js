function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "sun-drenched meadows whisper tales of slow, quiet days",
    autoStart: true,
    delay: 80,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
