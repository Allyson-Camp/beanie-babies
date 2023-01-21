import { getSigns } from './fetch-utils.js';

export function renderBabies(baby) {
    const img = document.createElement('img');
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    
    p1.textContent = baby.astroSign;
    p2.textContent = baby.birthday;
    p3.textContent = baby.title;
    //classlist.add.for each p
    img.src = baby.image;

    div.append(img, p1, p2, p3);
    // img.alt = ?

    return div;
}

export function renderAstroSigns(astroSigns) {

}