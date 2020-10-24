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
    // Find a match in results array
    const match = findMatch(cardId, results);
    // Add to favs
    favs.push(match);
    // save into local storage & paint both lists
    updateLocalStorage();
    paintFavs();
    paintResults();
}

function updateLocalStorage() {
    localStorage.setItem('favShows', JSON.stringify(favs));
}

function paintFavs() {
    // get favs from local storage
    const storedFavs = JSON.parse(localStorage.getItem('favShows'));
    if (!storedFavs) return;
    favs = storedFavs;
    // clear
    const favsList = document.querySelector('.js-favs-list');
    favsList.innerHTML = '';
    //paint title
    addSectionTitle('favs', favs);
    //paint delete-all button
    addDeleteAllButton();
    // Paint card info from local storage
    for (let i = 0; i < storedFavs.length; i++) {
        let newLi = createCard(favsList, storedFavs[i]);
        addDeleteIcon(newLi);
    }
    // Listen to delete buttons
    listenToDeleteAllButton();
}

// PAINTING______________________________________

function addDeleteIcon(parent) {
    const deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'fa fa-times-circle fa-2x js-delete-icon');
    parent.appendChild(deleteIcon);
    // delete button listener
    deleteIcon.addEventListener('click', getClickedItemId);
}
