/* Imports */
import { getBabies, getSigns } from './fetch-utils.js';
import { renderBabies, renderAstroSigns } from './render-utils.js';

/* Get DOM Elements */
const babyList = document.querySelector('.baby-list');
const selectionForm = document.querySelector('.selection-form');
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

    displayBabies();

    const signs = await getSigns();

    for (let sign of signs) {
        const optionEl = document.createElement('option');
        optionEl.value = sign.name;
        optionEl.textContent = sign.name;

        selectEl.append(optionEl);
    }
});

// addEventListener on Submit
// selectionForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const formData = new FormData(selectionForm);
//     const value = formData.get('astro-signs');
//     displayBabies();
// });


/* Display Functions */
function displayBabies() {
    babyList.textContent = '';
    for (let baby of babies) {
        babyList.append(renderBabies(baby));
    }
}

function displayAstroSigns() {
    
    dropdown.append(renderAstroSigns(astroSigns));
}
// (don't forget to call any display functions you want to run on page load!)
