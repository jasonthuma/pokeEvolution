import { capitalizeFirstLetter } from "./utilFunctions";
import arrow_down from '../img/arrow_down.png';
import arrow_horiz from '../img/arrow_horiz.png';
import arrow_left from '../img/arrow_left.png';
import arrow_lg_down from '../img/arrow_lg_down.png';
import arrow_lg_up from '../img/arrow_lg_up.png';
import arrow_right from '../img/arrow_right.png';

/*
    Function to add the information of a pokemon to the page
*/
export function renderPokeCard(name, pokeInfo, speciesInfo, div) {
    $(div).append(`<img src="${pokeInfo.sprites.front_default}" alt="${capitalizeFirstLetter(pokeInfo.name)}" width="125px">`);
    $(div).append(`<p class="mb-0">#${speciesInfo.id}</p>`);
    $(div).append(`<h5>${name}</h5>`);
    if (pokeInfo.types.length == 1) {
        $(div).append(`<span class="${pokeInfo.types[0].type.name}">${capitalizeFirstLetter(pokeInfo.types[0].type.name)}</span><br>`)
    } else {
        $(div).append(`<span class="${pokeInfo.types[0].type.name}">${capitalizeFirstLetter(pokeInfo.types[0].type.name)}</span>`)
        $(div).append(`<span class="${pokeInfo.types[1].type.name}">${capitalizeFirstLetter(pokeInfo.types[1].type.name)}</span><br>`)
    }
}
/*
    Function to add the information of pokemon with specific forms
*/
export function renderPokeCardForms(name, pokeInfo, speciesInfo, div, form) {
    if (name == 'Burmy' && form == 'Plant Cloak') {
        $(div).append(`<img src="${pokeInfo.sprites.front_default}" alt="${capitalizeFirstLetter(pokeInfo.name)}" width="125px">`);
    } else if (name == 'Burmy' && form == 'Sandy Cloak') {
        $(div).append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412-sandy.png" alt="${capitalizeFirstLetter(pokeInfo.name)}" width="125px">`);
    } else if (name == 'Burmy' && form == 'Trash Cloak') {
        $(div).append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412-trash.png" alt="${capitalizeFirstLetter(pokeInfo.name)}" width="125px">`);
    } else {
        $(div).append(`<img src="${pokeInfo.sprites.front_default}" alt="${capitalizeFirstLetter(pokeInfo.name)}" width="125px">`);
    }
    $(div).append(`<p class="mb-0">#${speciesInfo.id}</p>`);
    $(div).append(`<h5>${name}</h5>`);
    $(div).append(`<p class="mb-0">${form}</p>`);
    if (pokeInfo.types.length == 1) {
        $(div).append(`<span class="${pokeInfo.types[0].type.name}">${capitalizeFirstLetter(pokeInfo.types[0].type.name)}</span><br>`)
    } else {
        $(div).append(`<span class="${pokeInfo.types[0].type.name}">${capitalizeFirstLetter(pokeInfo.types[0].type.name)}</span>`)
        $(div).append(`<span class="${pokeInfo.types[1].type.name}">${capitalizeFirstLetter(pokeInfo.types[1].type.name)}</span><br>`)
    }
}
/*
    Function to add the proper arrow to the page
*/
export function renderArrow(direction, div) {
    if (direction == "DOWN") {
        $(div).append(`<picture><source media = "(min-width: 575px)" srcset="${arrow_horiz}"><img src="${arrow_down}" alt="arrow"></picture>`);
    } else if (direction == "LEFT") {
        $(div).append(`<picture><source media = "(min-width: 575px)" srcset="${arrow_lg_up}"><img src="${arrow_left}" alt="arrow"></picture>`);
    } else if (direction == "RIGHT") {
        $(div).append(`<picture><source media = "(min-width: 575px)" srcset="${arrow_lg_down}"><img src="${arrow_right}" alt="arrow"></picture>`);
    }
}
