'use strict';

function paintResults() {
    const resultsList = document.querySelector('.js-results-list');
    // Clear
    resultsList.innerHTML = '';
    //Paint cards
    for (const result of results) {
        let newLi = createCard(resultsList, result);
        addHighlightIfNeeded(newLi);
        newLi.addEventListener('click', handleCardClick);
    }
    addSectionTitle('results', results);
}

function addHighlightIfNeeded(newLi) {
    // Check
    const cardId = parseInt(newLi.id);
    const match = findMatch(cardId, favs);
    if (match) {
        newLi.classList.add('yellow-background');
    }
}

function addSectionTitle(section, list) {
    const sectionTitle = document.querySelector(`.${section}-list__title`);
    if (list.length > 0) {
        sectionTitle.classList.remove('hidden');
    } else {
        sectionTitle.classList.add('hidden');
    }
}
