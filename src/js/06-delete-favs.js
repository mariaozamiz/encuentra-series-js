'use strict';

function handleDeleteIconClick(ev) {
    const cardId = parseInt(ev.currentTarget.parentElement.id);
    deleteAsFav(cardId);
}

function deleteAsFav(id) {
    // Find clicked show to delete at favs array
    const showToDelete = favs.findIndex((fav) => {
        return fav.show.id === id;
    });
    favs.splice(showToDelete, 1);
    // save into local storage & paint both lists
    updateLocalStorage();
    paintFavs();
    paintResults();
}

function deleteAllFavs(ev) {
    ev.preventDefault();
    favs = [];
    updateLocalStorage();
    paintFavs();
    paintResults();
}
