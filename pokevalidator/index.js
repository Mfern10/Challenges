const express = require("express");
// Create the server instance.
const app = express();
// Configure the server instance to receive JSON data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const isPokemonValid = async (request, response, next) => {
  // If this fetch request returns JSON, then we want to store it as an object that we can work with.
  await fetch(baseURL + request.body.pokemonName).then(async (data) => {
    // Convert the response data to a string
    // We can only use a data.convert() function once as the data is "consumed"
    let dataText = await data.text();

    // Check for a match to an expected PokeAPI error
    if (dataText == "Not Found") {
      // Trigger the error handler with a relevant error message
      next(new Error("Pokemon not found."));
    } else {
      // Parse the data text as JSON, and
      // we can assume the data is valid JSON if we reach this else statement
      request.body.pokeApiResult = JSON.parse(dataText);
      // Move on to the next function in the chain!
      next();
    }
  });
};

// Declare error handlers last in the middleware declarations
const handleInvalid = (error, request, response, next) => {
  // Shouldn't do anything if no error is provided anyway,
  // but another IF won't hurt.
  if (error) {
    console.log(error.message);
    response.status(400).json({
      error: error.message,
    });
  }
};

// localhost:3000
app.post("/", isPokemonValid, handleInvalid, async (request, response) => {
  // Due to the modifications in the above middleware, we can just
  // assume that the data is on the body if we reached this function.
  // This keeps the routes skinny and helps the code stay D.R.Y.
  response.json({
    pokedexNumber: request.body.pokeApiResult.id,
    name: request.body.pokeApiResult.name,
  });
});

// Activate the server at port 3000.
app.listen(3000, () => {
  console.log("Server running!");
});
