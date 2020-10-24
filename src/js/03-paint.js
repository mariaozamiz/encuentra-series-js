'use strict';

// Paint favs (if there is any)
if (favs.length > 0) {
    paintFavs();
}

function paintResults() {
    const resultsList = document.querySelector('.js-results-list');
    // Clear
    resultsList.innerHTML = '';
    // Paint cards
    for (const result of results) {
        let newLi = createCard(resultsList, result);
        checkIfNeedsHighlight(newLi);
        newLi.addEventListener('click', checkIsFav);
    }
    // Paint title
    addSectionTitle('results');
}

function checkIfNeedsHighlight(newLi) {
    // Check
    const alreadyAFav = favs.find((fav) => {
        return fav.show.id === parseInt(newLi.id);
    });
    // Highlight
    if (alreadyAFav) {
        newLi.classList.add('yellow-background');
    }
}

function addSectionTitle(section) {
    const sectionTitle = document.querySelector(`.${section}-list__title`);
    if (section.length > 0) {
        sectionTitle.classList.remove('hidden');
    }
}
