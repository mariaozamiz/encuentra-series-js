'use strict';

function checkIsFav(event) {
    // Identify clicked card by id
    let clickedElement = document.getElementById(event.currentTarget.id);
    // Check if card is already at favs array
    const favShowCard = favs.find((fav) => {
        return fav.show.id === parseInt(clickedElement.id);
    });
    // Find card's info at results array
    if (favShowCard) {
        deleteFavs(favShowCard);
    } else {
        saveAsFav(event, favShowCard);
    }
    updateLocalStorage();
    paintFavs();
    paintResults();
}

function saveAsFav(event) {
    const clickedShowCardId = event.currentTarget.id;
    const favShowCard = results.find((result) => {
        return result.show.id === parseInt(clickedShowCardId);
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
    favs = favsInfoList;
    //paint title
    addSectionTitle('favs');
    //paint remove button
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
    listenToDeleteIcons();
    listenToDeleteAllButton();
}

function updateLocalStorage() {
    localStorage.setItem('favShows', JSON.stringify(favs));
}
