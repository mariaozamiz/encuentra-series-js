'use strict';

function checkIsFav(event) {
    // Identify clicked card by id
    let clickedElement = document.getElementById(event.currentTarget.id);
    const id = parseInt(clickedElement.id);
    // Check if card is already at favs array
    const favShowCard = favs.find((fav) => {
        return fav.show.id === id;
    });
    if (favShowCard) {
        deleteFav(id);
    } else {
        saveAsFav(id);
    }
}

function saveAsFav(id) {
    // Get info card from results array
    const favShowCard = results.find((result) => {
        return result.show.id === parseInt(id);
    });
    // Push card's info into favs array
    favs.push(favShowCard);
    // save into local storage
    updateLocalStorage();
    paintFavs();
    paintResults();
}

function paintFavs() {
    // get favs from local storage
    const favsInfoList = JSON.parse(localStorage.getItem('favShows'));
    if (!favsInfoList) return;
    favs = favsInfoList;
    //paint title
    addSectionTitle('favs');
    //paint delete-all button
    addDeleteAllButton();
    // clean favs list
    const favsList = document.querySelector('.js-favs-list');
    favsList.innerHTML = '';
    // Paint card info from local storage
    for (let i = 0; i < favsInfoList.length; i++) {
        let newLi = createCard(favsList, favsInfoList[i]);
        addDeleteIcon(newLi);
    }
    // Listen to delete buttons
    listenToDeleteAllButton();
}

function updateLocalStorage() {
    localStorage.setItem('favShows', JSON.stringify(favs));
}

// PAINTING______________________________________

function addDeleteIcon(parent) {
    const deleteIcon = document.createElement('i');
    deleteIcon.setAttribute('class', 'fa fa-times-circle fa-2x js-delete-icon');
    parent.appendChild(deleteIcon);
    // delete button listener
    deleteIcon.addEventListener('click', getClickedItemId);
}
