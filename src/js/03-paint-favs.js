'use strict';

paintFavs();

function paintFavs() {
    const favsList = document.querySelector('.js-favs-list');
    // clear
    favsList.innerHTML = '';
    //paint cards
    for (let i = 0; i < favs.length; i++) {
        let newLi = createCard(favsList, favs[i]);
        addDeleteIcon(newLi);
    }
    //add section elements
    addSectionTitle('favs', favs);
    addDeleteAllButton();
}

function addDeleteIcon(newLi) {
    const deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'fa fa-times-circle fa-2x js-delete-icon');
    newLi.appendChild(deleteIcon);
    deleteIcon.addEventListener('click', handleDeleteIconClick);
}

function addDeleteAllButton() {
    const deleteButton = document.querySelector('.js-favs-list__delete-button');
    deleteButton.addEventListener('click', deleteAllFavs);
    if (favs.length === 0) {
        deleteButton.classList.add('hidden');
    } else {
        deleteButton.classList.remove('hidden');
    }
}
