export function renderBabies(baby) {
    const img = document.createElement('img');
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    
    //classlist.add.for each p
    p1.textContent = baby.title;
    p2.textContent = ` was born on ${baby.birthday}`;
    p3.textContent = ` and is a ${baby.astroSign}`;
    
    img.src = baby.image;

    div.append(img, p1, p2, p3);
    
    return div;
}

export function renderAstroSigns(astroSigns) {

}

