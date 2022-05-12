import {runSearch} from "./app/app";
import "./main.scss";
$('#searchBtn').click(() => {
    runSearch();
});

/*
    Trigger the search if the enter is pressed when the input box is 
    highlighted
*/
$('#searchName').keyup((event)=>{
    if (event.keyCode === 13) {
        $('#searchBtn').click();
    }
}); 