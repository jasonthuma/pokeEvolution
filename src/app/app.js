import {getPokemonSpeciesData} from "./utils/getPokeInfo";

/*
    When search button is clicked:
    *Remove any previously populated content from prior searches
    *Trigger the search by calling the get function with the user data
*/
export function runSearch() {
    const SINGLEDIV = '.singleFirstEvo', DBLFIRST1 = '.doubleFirstEvo1', DBLFIRST2 = '.doubleFirstEvo2', DBLFIRST3 = '.doubleFirstEvo3', DBLFIRST4 = '.doubleFirstEvo4', 
    DBLSECOND1 = '.doubleSecondEvo1', DBLSECOND2 = '.doubleSecondEvo2', DBLSECOND3 = '.doubleSecondEvo3', DBLSECOND4 = '.doubleSecondEvo4', DBLSECOND5 = '.doubleSecondEvo5', 
    DBLSECOND6 = '.doubleSecondEvo6', DBLSECOND7 = '.doubleSecondEvo7', DBLSECOND8 = '.doubleSecondEvo8', TRPLFIRST = '.tripleFirstEvo', TRPLSECOND1 = '.tripleSecondEvo1', 
    TRPLSECOND2 = '.tripleSecondEvo2', TRPLTHIRD1 = '.tripleThirdEvo1', TRPLTHIRD2 = '.tripleThirdEvo2', TRIPLE12 = '.triple12', TRIPLE23 = '.triple23', DOUBLE12TRIGGER1 = '.double12trigger1', 
    DOUBLE12TRIGGER2 = '.double12trigger2', DOUBLE12TRIGGER3 = '.double12.trigger3', DOUBLE12TRIGGER4 = '.double12.trigger4', DOWN = 'DOWN', LEFT = 'LEFT', RIGHT = 'RIGHT',
    DOUBLE12ARROW1 = '.double12arrow1', DOUBLE12ARROW2 = '.double12arrow2', DOUBLE12ARROW3 = '.double12arrow3', DOUBLE12ARROW4 = '.double12arrow4';
    let searchString = $('#searchName').val().toLowerCase();
    $(SINGLEDIV).empty();
    $(DBLFIRST1).empty();
    $(DBLFIRST2).empty();
    $(DBLFIRST3).empty();
    $(DBLFIRST4).empty();
    $(DBLSECOND1).empty();
    $(DBLSECOND2).empty();
    $(DBLSECOND3).empty();
    $(DBLSECOND4).empty();
    $(DBLSECOND5).empty();
    $(DBLSECOND6).empty();
    $(DBLSECOND7).empty();
    $(DBLSECOND8).empty();
    $(TRPLFIRST).empty();
    $(TRPLSECOND1).empty();
    $(TRPLSECOND2).empty();
    $(TRPLTHIRD1).empty();
    $(TRPLTHIRD2).empty();
    $('.triple12').empty();
    $('.triple23').empty();
    $(DOUBLE12TRIGGER1).empty();
    $(DOUBLE12TRIGGER2).empty();
    $(DOUBLE12TRIGGER3).empty();
    $(DOUBLE12TRIGGER4).empty();
    $(DOUBLE12ARROW1).empty();
    $(DOUBLE12ARROW2).empty();
    $(DOUBLE12ARROW3).empty();
    $(DOUBLE12ARROW4).empty();

    getPokemonSpeciesData(searchString);
};

