'use strict';

function handleCardClick(ev) {
    const cardId = parseInt(ev.currentTarget.id);
    const match = findMatch(cardId, favs);
    if (match) {
        deleteAsFav(cardId);
    } else {
        saveAsFav(cardId);
    }
}

function findMatch(cardId, list) {
    const match = list.find((element) => {
        return element.show.id === cardId;
    });
    return match;
}

function saveAsFav(cardId) {
    // push into favs array
    const match = findMatch(cardId, results);
    favs.push(match);
    // save into local storage & paint both lists
    updateLocalStorage();
    paintFavs();
    paintResults();
}

function updateLocalStorage() {
    localStorage.setItem('storedFavs', JSON.stringify(favs));
}
