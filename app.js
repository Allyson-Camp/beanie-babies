/* Imports */
import { getBabies } from './fetch-utils.js';
/* Get DOM Elements */
const babyList = document.querySelector('baby-list');
const selectionForm = document.querySelector('selection-form');
const dropdown = document.querySelector('dropdown');
    //form and button
/* State */
let babies = [];
let astroSigns = [];

/* Events */
// addEventListener on load
window.addEventListener('load', async () => {

    const response = await getBabies();
    babies = response;
    console.log(response);
// call findCountries function with no arguments to fetch all countries (Slice A);
// Slice B: call asynchronous getContinents fetch function and set to response variable
// Slice B: set the continents state to the response.data
// Slice B: call displayContinentOptions function;

});

// addEventListener on Submit
selectionForm.addEventListener('submit', () => {
    // e.preventDefault();
    // const formData = new FormData(selectionForm);
    // // Slice C: Call findCountries with continent from formData
    // const value = formData.get('astro-');
    // findCountries(value);
});


/* Display Functions */
function displayBabies() {

}

function displayAstroSigns() {

}
// (don't forget to call any display functions you want to run on page load!)
