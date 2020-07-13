'use strict';

// PAINTING ____________________________________________________________

function addDeleteAllButton() {
    const deleteButton = document.querySelector('.js-favs-list__delete-button');
    deleteButton.classList.remove('hidden');
}

function addDeleteIcon(parent) {
    const deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'fa fa-times-circle fa-2x js-delete-icon');
    parent.appendChild(deleteIcon);
}

// DELETING ____________________________________________________________

// Delete icons ____________________________________

// Delete all button ________________________________

function deleteAllFavs(event) {
    event.preventDefault();
    favs = [];
    updateLocalStorage();
    paintFavs();
    paintResults();
}

// LISTENING _______________________________________________________________

function listenToSearchButton() {
    const searchButton = document.querySelector('.js-search-form__button');
    searchButton.addEventListener('click', readInput);
}

function listenToDeleteIcons() {
    const deleteIcons = document.querySelectorAll('.js-delete-icon');
    for (const deleteIcon of deleteIcons) {
        deleteIcon.addEventListener('click', deleteFavs);
    }
}

function listenToDeleteAllButton() {
    const deleteAllButton = document.querySelector(
        '.js-favs-list__delete-button'
    );
    deleteAllButton.addEventListener('click', deleteAllFavs);
}
