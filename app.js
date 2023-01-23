/* Imports */
import { getBabies, getSigns } from './fetch-utils.js';
import { renderBabies, renderAstroSigns } from './render-utils.js';

/* Get DOM Elements */
const babyList = document.querySelector('.baby-list');
const formEl = document.querySelector('form');
const dropdown = document.querySelector('.dropdown');
const selectEl = document.querySelector('select');
    
/* State */
let babies = [];
let astroSigns = [];

/* Events */
// addEventListener on load of window
window.addEventListener('load', async () => {
   //request babies
    const response = await getBabies();
    babies = response;

    //calling the display function thats below 
    displayBabies();

    const signs = await getSigns();

    //looping the signs and appended the new option el to the dom
    for (let sign of signs) {
        const optionEl = document.createElement('option');
        optionEl.value = sign.name;
        optionEl.textContent = sign.name;

        selectEl.append(optionEl);
    }
});

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const filteredList = await getBabies(selectEl.value);

    babies = filteredList;

    displayBabies();
});

/* Display Functions */
function displayBabies() {
    babyList.textContent = '';
    for (let baby of babies) {
        babyList.append(renderBabies(baby));
    }
}

// function displayAstroSigns() {
    
//     dropdown.append(renderAstroSigns(astroSigns));
// }
// (don't forget to call any display functions you want to run on page load!)
