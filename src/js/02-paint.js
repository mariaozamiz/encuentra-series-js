'use strict';

if (favs.length > 0) {
    paintFavs();
}

function paintResults() {
    const resultsList = document.querySelector('.js-results-list');
    // Clear
    resultsList.innerHTML = '';
    // Paint
    for (const result of results) {
        let newLi = createCard(resultsList, result);
        checkIfNeedsHighlight(newLi);
        newLi.addEventListener('click', checkIsFav);
    }
    addSectionTitle('results');
}

function addSectionTitle(section) {
    const sectionTitle = document.querySelector(`.${section}-list__title`);
    sectionTitle.classList.remove('hidden');
}

function createCard(parent, element) {
    // li
    const newLi = document.createElement('li');
    parent.appendChild(newLi);
    // li atribute
    newLi.setAttribute('id', element.show.id);
    // image
    const newImage = document.createElement('img');
    newLi.appendChild(newImage);
    if (!element.show.image) {
        newImage.src =
            'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    } else {
        newImage.src = element.show.image.medium;
    }
    // title
    const newTitle = document.createElement('h3');
    newLi.appendChild(newTitle);
    newTitle.innerHTML = element.show.name;
    return newLi;
}

function checkIfNeedsHighlight(newLi) {
    // check if what is painted on results is already at favs
    const alreadyAFav = favs.find((fav) => {
        return fav.show.id === parseInt(newLi.id);
    });
    // highlight
    if (alreadyAFav) {
        newLi.classList.add('yellow-background');
    }
}
