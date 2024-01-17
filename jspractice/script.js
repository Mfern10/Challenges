// const displayText = (text) => {
//   return (document.querySelector("#paragraph").innerHTML = text);
// };

// function updateUI(data) {
//   console.log(data);
// }

// const changeText = (text) => {
//   return (document.querySelector("#h1").innerHTML = text);
// };

// //fetch data with a callback
// const fetchData = (callback) => {
//   const data = "This is the fetched data.";
//   callback(data);
// };

// //fetch data and display no callback
// const fetchDataAndDisplay = () => {
//   const data = "this is data to display";
//   displayText(data);
// };

// //fetch data and log no callback
// const fetchDataAndLog = () => {
//   const data = "this is data to log";
//   updateUI(data);
// };

// //call fetch with display callback
// fetchData(displayText);

// //call fetch with log callback
// fetchData(updateUI);

// fetchData(changeText);

// //call fetch and display without callback
// fetchDataAndDisplay();

// //call fetch and log without callback
// fetchDataAndLog();

// SENDING REQUESTS TO THE SERVER OR API
// -OLD WAY
// function getJoke() {
//   return new Promise((resolve, reject) => {
//     const req = new XMLHttpRequest();
//     // set event listener for the request
//     req.addEventListener("load", (event) =>
//       resolve(event.target.response.joke)
//     );
//     // open the request
//     req.open("GET", "https://icanhazdadjoke.com/");
//     // set the request header
//     req.setRequestHeader("Accept", "application/json");
//     // set respomse type
//     req.responseType = "json";
//     // send the request
//     req.send();
//   });
// }



const displayImage = (image) => {
    img = document.createElement("img")
    img.src = image
    console.log(img.src)
    document.body.appendChild(img)
}

const displayText = (text) => {
  return (document.querySelector("#paragraph").innerHTML = text);
};

const displayPokemon = (pokemon, display, displayText) => {
  display(pokemon.sprites.front_default);
  displayText(pokemon.name);
};

// function fetchJoke(callback) {
//   fetch("https://icanhazdadjoke.com", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => callback(data.joke));
// }

// fetchJoke(displayText);

const catchPokemon = (pokemonName, onSuccess, onError) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  return fetch(url)
    .then((res) => {
        if (!res.ok) {
          throw new Error("ERROR!");
      }
      return res.json()
    })
    .then((data) => onSuccess(data))
    .catch((err) => onError(err))
};

catchPokemon("charizard", displayPokemon, console.log);
