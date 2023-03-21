const jokeEl = document.getElementById("joke");
const jokeButton = document.getElementById("jokeBtn");

window.addEventListener("load",generateJoke)
jokeButton.addEventListener("click", generateJoke)

async function generateJoke() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    }
  
    const res = await fetch("https://icanhazdadjoke.com", config)
    const data = await res.json()
    
    jokeEl.innerHTML = data.joke

  }

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   }

//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     });
// }
