/*
    Function to parse the returned evolution data into multiple arrays.
    There is an array for names, pokemon info, and a variable containing the evolution chain.
    This data is then parsed further and displayed on the page in certain
    places depending on the number of evolutions.
*/
import { capitalizeFirstLetter } from "./utilFunctions";
import { getEvolutionChainData } from "./getPokeInfo";
import { getPokemonData } from "./getPokeInfo";
import { asyncPokemonSpeciesData } from "./getPokeInfo";
import { renderPokeCard } from "./renderFunctions";
import { renderPokeCardForms } from "./renderFunctions";
import { renderArrow } from "./renderFunctions";

export async function placePokemonOnPage(pokemonSpeciesData) {
  const SINGLEDIV = ".singleFirstEvo",
    DBLFIRST1 = ".doubleFirstEvo1",
    DBLFIRST2 = ".doubleFirstEvo2",
    DBLFIRST3 = ".doubleFirstEvo3",
    DBLFIRST4 = ".doubleFirstEvo4",
    DBLSECOND1 = ".doubleSecondEvo1",
    DBLSECOND2 = ".doubleSecondEvo2",
    DBLSECOND3 = ".doubleSecondEvo3",
    DBLSECOND4 = ".doubleSecondEvo4",
    DBLSECOND5 = ".doubleSecondEvo5",
    DBLSECOND6 = ".doubleSecondEvo6",
    DBLSECOND7 = ".doubleSecondEvo7",
    DBLSECOND8 = ".doubleSecondEvo8",
    TRPLFIRST = ".tripleFirstEvo",
    TRPLSECOND1 = ".tripleSecondEvo1",
    TRPLSECOND2 = ".tripleSecondEvo2",
    TRPLTHIRD1 = ".tripleThirdEvo1",
    TRPLTHIRD2 = ".tripleThirdEvo2",
    TRIPLE12 = ".triple12",
    TRIPLE23 = ".triple23",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    DOUBLE12ARROW1 = ".double12arrow1",
    DOUBLE12ARROW2 = ".double12arrow2",
    DOUBLE12ARROW3 = ".double12arrow3",
    DOUBLE12ARROW4 = ".double12arrow4";
  let chain,
    pokeNames = [[], [], []],
    pokeInfo = [[], [], []],
    speciesInfo = [[], [], []];
  let pokeArray = [];
  let evolveData = await getEvolutionChainData(
    pokemonSpeciesData.evolution_chain.url
  );
  chain = evolveData.chain;
  console.log(chain);
  pokeNames[0].push(capitalizeFirstLetter(chain.species.name));
  pokeArray.push(pokeNames[0]);
  let pokeSpecies1 = await asyncPokemonSpeciesData(chain.species.name);
  speciesInfo[0].push(pokeSpecies1);
  if (chain.evolves_to.length != 0) {
    for (let i = 0; i < chain.evolves_to.length; i++) {
      pokeNames[1].push(
        capitalizeFirstLetter(chain.evolves_to[i].species.name)
      );
      let pokeSpecies2 = await asyncPokemonSpeciesData(
        chain.evolves_to[i].species.name
      );
      speciesInfo[1].push(pokeSpecies2);
    }

    pokeArray.push(pokeNames[1]);
  }
  if (
    chain.evolves_to.length == 2 &&
    chain.evolves_to[0].evolves_to.length == 1 &&
    chain.evolves_to[1].evolves_to.length == 1
  ) {
    pokeNames[2].push(
      capitalizeFirstLetter(chain.evolves_to[0].evolves_to[0].species.name)
    );
    let pokeSpecies31 = await asyncPokemonSpeciesData(
      chain.evolves_to[0].evolves_to[0].species.name
    );
    speciesInfo[2].push(pokeSpecies31);
    pokeNames[2].push(
      capitalizeFirstLetter(chain.evolves_to[1].evolves_to[0].species.name)
    );
    let pokeSpecies32 = await asyncPokemonSpeciesData(
      chain.evolves_to[1].evolves_to[0].species.name
    );
    speciesInfo[2].push(pokeSpecies32);
    pokeArray.push(pokeNames[2]);
  } else if (
    chain.evolves_to.length != 0 &&
    chain.evolves_to[0].evolves_to.length != 0
  ) {
    for (let i = 0; i < chain.evolves_to[0].evolves_to.length; i++) {
      pokeNames[2].push(
        capitalizeFirstLetter(chain.evolves_to[0].evolves_to[i].species.name)
      );
      let pokeSpecies3 = await asyncPokemonSpeciesData(
        chain.evolves_to[0].evolves_to[i].species.name
      );
      speciesInfo[2].push(pokeSpecies3);
    }
    pokeArray.push(pokeNames[2]);
  }
  if (pokeArray.length == 1) {
    pokeInfo[0][0] = await getPokemonData(pokeArray[0][0].toLowerCase());
    renderPokeCard(
      pokeArray[0][0],
      pokeInfo[0][0],
      speciesInfo[0][0],
      SINGLEDIV
    );
  } else if (pokeArray.length == 2 && pokeArray[0][0] != "Burmy") {
    pokeInfo[0][0] = await getPokemonData(pokeArray[0][0].toLowerCase());
    renderPokeCard(
      pokeArray[0][0],
      pokeInfo[0][0],
      speciesInfo[0][0],
      DBLFIRST1
    );
    if (
      pokeArray[1].length == 1 &&
      pokeArray[0][0] != "Kubfu" &&
      pokeArray[0][0] != "Toxel" &&
      pokeArray[0][0] != "Rockruff"
    ) {
      pokeInfo[1][0] = await getPokemonData(pokeArray[1][0].toLowerCase());
      renderPokeCard(
        pokeArray[1][0],
        pokeInfo[1][0],
        speciesInfo[1][0],
        DBLSECOND1
      );
      renderArrow(DOWN, DOUBLE12ARROW1);
    } else if (pokeArray[1].length == 1 && pokeArray[0][0] == "Rockruff") {
      //special case for rockruff
      pokeInfo[1][0] = await getPokemonData("lycanroc-midday");
      renderPokeCardForms(
        pokeArray[1][0],
        pokeInfo[1][0],
        speciesInfo[1][0],
        DBLSECOND1,
        "Midday Form"
      );
      renderArrow(LEFT, DOUBLE12ARROW1);
      pokeInfo[1][1] = await getPokemonData("lycanroc-midnight");
      renderPokeCardForms(
        pokeArray[1][0],
        pokeInfo[1][1],
        speciesInfo[1][1],
        DBLSECOND2,
        "Midnight Form"
      );
      renderArrow(DOWN, DOUBLE12ARROW2);
      pokeInfo[1][2] = await getPokemonData("lycanroc-dusk");
      renderPokeCardForms(
        pokeArray[1][0],
        pokeInfo[1][2],
        speciesInfo[1][1],
        DBLSECOND3,
        "Dusk Form"
      );
      renderArrow(RIGHT, DOUBLE12ARROW3);
    } else if (pokeArray[1].length == 1 && pokeArray[0][0] == "Toxel") {
      //special case for toxel
      pokeInfo[1][0] = await getPokemonData("toxtricity-low-key");
      renderPokeCardForms(
        pokeArray[1][0],
        pokeInfo[1][0],
        speciesInfo[1][0],
        DBLSECOND1,
        "Low Key Form"
      );
      renderArrow(LEFT, DOUBLE12ARROW1);
      pokeInfo[1][1] = await getPokemonData("toxtricity-amped");
      renderPokeCardForms(
        pokeArray[1][0],
        pokeInfo[1][1],
        speciesInfo[1][1],
        DBLSECOND2,
        "Amped Form"
      );
      renderArrow(RIGHT, DOUBLE12ARROW2);
    } else if (pokeArray[1].length == 1 && pokeArray[0][0] == "Kubfu") {
      //special case for kubfu
      pokeInfo[1][0] = await getPokemonData("urshifu-rapid-strike");
      renderPokeCardForms(
        pokeArray[1][0],
        pokeInfo[1][0],
        speciesInfo[1][0],
        DBLSECOND1,
        "Rapid Strike"
      );
      renderArrow(LEFT, DOUBLE12ARROW1);
      pokeInfo[1][1] = await getPokemonData("urshifu-single-strike");
      renderPokeCardForms(
        pokeArray[1][0],
        pokeInfo[1][1],
        speciesInfo[1][1],
        DBLSECOND2,
        "Single Strike"
      );
      renderArrow(RIGHT, DOUBLE12ARROW2);
    } else if (pokeArray[1].length == 2 && pokeArray[0][0] != "Burmy") {
      pokeInfo[1][0] = await getPokemonData(pokeArray[1][0].toLowerCase());
      renderPokeCard(
        pokeArray[1][0],
        pokeInfo[1][0],
        speciesInfo[1][0],
        DBLSECOND1
      );
      renderArrow(LEFT, DOUBLE12ARROW1);
      //renderTrigger(DOUBLE12TRIGGER1, triggers12[0]);
      pokeInfo[1][1] = await getPokemonData(pokeArray[1][1].toLowerCase());
      renderPokeCard(
        pokeArray[1][1],
        pokeInfo[1][1],
        speciesInfo[1][1],
        DBLSECOND2
      );
      renderArrow(RIGHT, DOUBLE12ARROW1);
      //renderTrigger(DOUBLE12TRIGGER2, triggers12[1]);
    } else if (pokeArray[1].length == 3) {
      pokeInfo[1][0] = await getPokemonData(pokeArray[1][0].toLowerCase());
      renderPokeCard(
        pokeArray[1][0],
        pokeInfo[1][0],
        speciesInfo[1][0],
        DBLSECOND1
      );
      renderArrow(LEFT, DOUBLE12ARROW1);
      pokeInfo[1][1] = await getPokemonData(pokeArray[1][1].toLowerCase());
      renderPokeCard(
        pokeArray[1][1],
        pokeInfo[1][1],
        speciesInfo[1][1],
        DBLSECOND2
      );
      renderArrow(DOWN, DOUBLE12ARROW2);
      pokeInfo[1][2] = await getPokemonData(pokeArray[1][2].toLowerCase());
      renderPokeCard(
        pokeArray[1][2],
        pokeInfo[1][2],
        speciesInfo[1][2],
        DBLSECOND3
      );
      renderArrow(RIGHT, DOUBLE12ARROW3);
    } else if (pokeArray[1].length == 8) {
      //special case for Eevee
      renderPokeCard(
        pokeArray[0][0],
        pokeInfo[0][0],
        speciesInfo[0][0],
        DBLFIRST2
      );
      renderPokeCard(
        pokeArray[0][0],
        pokeInfo[0][0],
        speciesInfo[0][0],
        DBLFIRST3
      );
      renderPokeCard(
        pokeArray[0][0],
        pokeInfo[0][0],
        speciesInfo[0][0],
        DBLFIRST4
      );
      pokeInfo[1][0] = await getPokemonData(pokeArray[1][0].toLowerCase());
      renderPokeCard(
        pokeArray[1][0],
        pokeInfo[1][0],
        speciesInfo[1][0],
        DBLSECOND1
      );
      pokeInfo[1][1] = await getPokemonData(pokeArray[1][1].toLowerCase());
      renderPokeCard(
        pokeArray[1][1],
        pokeInfo[1][1],
        speciesInfo[1][1],
        DBLSECOND2
      );
      pokeInfo[1][2] = await getPokemonData(pokeArray[1][2].toLowerCase());
      renderPokeCard(
        pokeArray[1][2],
        pokeInfo[1][2],
        speciesInfo[1][2],
        DBLSECOND3
      );
      pokeInfo[1][3] = await getPokemonData(pokeArray[1][3].toLowerCase());
      renderPokeCard(
        pokeArray[1][3],
        pokeInfo[1][3],
        speciesInfo[1][3],
        DBLSECOND4
      );
      pokeInfo[1][4] = await getPokemonData(pokeArray[1][4].toLowerCase());
      renderPokeCard(
        pokeArray[1][4],
        pokeInfo[1][4],
        speciesInfo[1][4],
        DBLSECOND5
      );
      pokeInfo[1][5] = await getPokemonData(pokeArray[1][5].toLowerCase());
      renderPokeCard(
        pokeArray[1][5],
        pokeInfo[1][5],
        speciesInfo[1][5],
        DBLSECOND6
      );
      pokeInfo[1][6] = await getPokemonData(pokeArray[1][6].toLowerCase());
      renderPokeCard(
        pokeArray[1][6],
        pokeInfo[1][6],
        speciesInfo[1][6],
        DBLSECOND7
      );
      pokeInfo[1][7] = await getPokemonData(pokeArray[1][7].toLowerCase());
      renderPokeCard(
        pokeArray[1][7],
        pokeInfo[1][7],
        speciesInfo[1][7],
        DBLSECOND8
      );
    }
  } else if (pokeArray.length == 3) {
    pokeInfo[0][0] = await getPokemonData(pokeArray[0][0].toLowerCase());
    renderPokeCard(
      pokeArray[0][0],
      pokeInfo[0][0],
      speciesInfo[0][0],
      TRPLFIRST
    );
    if (pokeArray[1].length == 1) {
      pokeInfo[1][0] = await getPokemonData(pokeArray[1][0].toLowerCase());
      renderPokeCard(
        [pokeArray[1][0]],
        pokeInfo[1][0],
        speciesInfo[1][0],
        TRPLSECOND1
      );
      renderArrow(DOWN, TRIPLE12);
      //renderTrigger(TRIPLE12, triggers12[0]);
    } else if (pokeArray[1].length == 2) {
      pokeInfo[1][0] = await getPokemonData(pokeArray[1][0].toLowerCase());
      renderPokeCard(
        pokeArray[1][0],
        pokeInfo[1][0],
        speciesInfo[1][0],
        TRPLSECOND1
      );
      renderArrow(LEFT, TRIPLE12);
      pokeInfo[1][1] = await getPokemonData(pokeArray[1][1].toLowerCase());
      renderPokeCard(
        pokeArray[1][1],
        pokeInfo[1][1],
        speciesInfo[1][1],
        TRPLSECOND2
      );
      renderArrow(RIGHT, TRIPLE12);
    }
    if (pokeArray[2].length == 1) {
      pokeInfo[2][0] = await getPokemonData(pokeArray[2][0].toLowerCase());
      renderPokeCard(
        pokeArray[2][0],
        pokeInfo[2][0],
        speciesInfo[2][0],
        TRPLTHIRD1
      );
      renderArrow(DOWN, TRIPLE23);
      //renderTrigger(TRIPLE23, triggers23[0]);
    } else if (pokeArray[2].length == 2) {
      pokeInfo[2][0] = await getPokemonData(pokeArray[2][0].toLowerCase());
      renderPokeCard(
        pokeArray[2][0],
        pokeInfo[2][0],
        speciesInfo[2][0],
        TRPLTHIRD1
      );
      if (pokeArray[1].length == 2) {
        renderArrow(DOWN, TRIPLE23);
      } else {
        renderArrow(LEFT, TRIPLE23);
      }
      pokeInfo[2][1] = await getPokemonData(pokeArray[2][1].toLowerCase());
      renderPokeCard(
        pokeArray[2][1],
        pokeInfo[2][1],
        speciesInfo[2][1],
        TRPLTHIRD2
      );
      if (pokeArray[1].length == 2) {
        renderArrow(DOWN, TRIPLE23);
      } else {
        renderArrow(RIGHT, TRIPLE23);
      }
    }
  }
  if (pokeArray[0][0] == "Burmy") {
    //special case for burmy & forms
    pokeInfo[0][0] = await getPokemonData(pokeArray[0][0].toLowerCase());
    renderPokeCardForms(
      pokeArray[0][0],
      pokeInfo[0][0],
      speciesInfo[0][0],
      DBLFIRST1,
      "Plant Cloak"
    );
    renderPokeCardForms(
      pokeArray[0][0],
      pokeInfo[0][0],
      speciesInfo[0][0],
      DBLFIRST2,
      "Sandy Cloak"
    );
    renderPokeCardForms(
      pokeArray[0][0],
      pokeInfo[0][0],
      speciesInfo[0][0],
      DBLFIRST3,
      "Trash Cloak"
    );
    renderPokeCardForms(
      pokeArray[0][0],
      pokeInfo[0][0],
      speciesInfo[0][0],
      DBLFIRST4,
      "Plant Cloak"
    );
    speciesInfo[1][3] = speciesInfo[1][1];
    speciesInfo[1][2] = speciesInfo[1][0];
    speciesInfo[1][1] = speciesInfo[1][0];
    console.log("species info:", speciesInfo);
    pokeInfo[1][0] = await getPokemonData("wormadam-plant");
    renderPokeCardForms(
      pokeArray[1][0],
      pokeInfo[1][0],
      speciesInfo[1][0],
      DBLSECOND1,
      "Plant Cloak"
    );
    renderArrow(DOWN, DOUBLE12ARROW1);
    pokeInfo[1][1] = await getPokemonData("wormadam-sandy");
    renderPokeCardForms(
      pokeArray[1][0],
      pokeInfo[1][1],
      speciesInfo[1][1],
      DBLSECOND2,
      "Sandy Cloak"
    );
    renderArrow(DOWN, DOUBLE12ARROW2);
    pokeInfo[1][2] = await getPokemonData("wormadam-trash");
    renderPokeCardForms(
      pokeArray[1][0],
      pokeInfo[1][2],
      speciesInfo[1][2],
      DBLSECOND3,
      "Trash Cloak"
    );
    renderArrow(DOWN, DOUBLE12ARROW3);
    pokeInfo[1][3] = await getPokemonData(pokeArray[1][1].toLowerCase());
    renderPokeCard(
      pokeArray[1][1],
      pokeInfo[1][3],
      speciesInfo[1][3],
      DBLSECOND4
    );
    renderArrow(DOWN, DOUBLE12ARROW4);
  }
}
console.log("hi");
