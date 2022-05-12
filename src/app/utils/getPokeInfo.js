/*
    This function takes a string representing the name of a pokemon and
    uses it in a get request for the pokemon_species data from the pokeapi
    If the name is invalid it will alert the user otherwise it will pass
    the returned data to another function to get the evolution tree for
    the requested pokemon
*/
import {placePokemonOnPage} from "./placePokemonOnPage";
import {checkError} from "./utilFunctions";

export function getPokemonSpeciesData(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`, {
        method: 'GET'})
    .then(checkError)
    .then(data => {
        placePokemonOnPage(data);
    }).catch(() => {
        alert('Invalid name, try again');
    })  
}

/*
    Function to get the evolution chain data from an input of a url directed
    to the evolution chain for a previously specified pokemon.
*/
export async function getEvolutionChainData(evolutionURL) {
    let response = await fetch(evolutionURL, {method: 'GET'});
    let evolveData = await response.json();
    return evolveData;
}

/*
    Function to get pokemon data from an input of a pokemon name.
    The pokemon data contains the sprite images
*/
export async function getPokemonData(pokemonName) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
        method: 'GET'})
    let pokemonData = await response.json();
    return pokemonData;
};

/*
    Async function to get pokemon species data from an input of a pokemon name.
    This data will have the id of the pokemon which is needed for display.
    The only difference here from the getPokemonSpeciesData is it needs to be
    async to assign the result to a new variable. 
*/
export async function asyncPokemonSpeciesData(pokemonName) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`, {
        method: 'GET'})
    let speciesData = await response.json();
    return speciesData;
}