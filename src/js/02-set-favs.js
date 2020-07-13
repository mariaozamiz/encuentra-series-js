'use strict';

// painted cards selector and listener
function listenClicksOnPaintedResults() {
    const showCards = document.querySelectorAll('.js-results-list__showcard');
    for (const showCard of showCards) {
        showCard.addEventListener('click', checkIsFav);
    }
}

function checkIsFav(event) {
    // Identify clicked card by id
    let showCard = document.getElementById(event.currentTarget.id);
    // Check if card is already at favs array
    const favShowCard = favs.find((fav) => {
        return fav.show.id === parseInt(showCard.id);
    });
    // Find card's info at results array
    if (favShowCard) {
        deleteFav(favShowCard);
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
        let newLi = addLi(favsList, 'favs');
        newLi.setAttribute('id', favsInfoList[i].show.id);
        addShowImage(favsInfoList[i], newLi);
        addShowTitle(favsInfoList[i], newLi);
        addDeleteIcon(newLi);
    }
    // Listen to delete buttons
    listenToDeleteIcons();
    listenToDeleteAllButton();
}

function updateLocalStorage() {
    localStorage.setItem('favShows', JSON.stringify(favs));
}
