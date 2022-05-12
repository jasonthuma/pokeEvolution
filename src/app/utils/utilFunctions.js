/*
    Make sure the response from the api is in a good status
    Throw a new error otherwise
*/
export function checkError(response) {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else {
        throw Error(response.statusText);
    }
}

/*
    Function to make the first letter in a string uppercase
    Used for the data that gets displayed to the user
*/
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}