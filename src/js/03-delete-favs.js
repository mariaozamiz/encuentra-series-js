'use strict';

// selectors

function getClickedItemId(event) {
    const parent = document.getElementById(
        event.currentTarget.parentElement.id
    );
    deleteFav(parseInt(parent.id));
}

function deleteFav(id) {
    // Find clicked show to delete at favs array
    const showToDelete = favs.findIndex((fav) => {
        return fav.show.id === id;
    });

    favs.splice(showToDelete, 1);

    updateLocalStorage();
    paintFavs();
    paintResults();
}

function deleteAllFavs(event) {
    event.preventDefault();
    favs = [];
    updateLocalStorage();
    paintFavs();
    paintResults();
}

// PAINTING ____________________________________________________________

function addDeleteAllButton() {
    const deleteButton = document.querySelector('.js-favs-list__delete-button');
    if (favs.length === 0) {
        deleteButton.classList.add('hidden');
    } else {
        deleteButton.classList.remove('hidden');
    }
}

// LISTENING _______________________________________________________________

function listenToDeleteAllButton() {
    const deleteAllButton = document.querySelector(
        '.js-favs-list__delete-button'
    );
    deleteAllButton.addEventListener('click', deleteAllFavs);
}
