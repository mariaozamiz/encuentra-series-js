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
        showCard.classList.toggle('fav-show');
        updateLocalStorage();
    } else {
        saveAsFav(event, favShowCard);
    }
}

function saveAsFav(event) {
    // Identify clicked card by id
    const clickedShowCardId = event.currentTarget.id;
    // Highlight card at painted search results
    const showCard = document.getElementById(clickedShowCardId);
    showCard.classList.toggle('fav-show');
    // Find card's info at results array
    const favShowCard = results.find((result) => {
        return result.show.id === parseInt(showCard.id);
    });
    // Push card's info into favs array
    favs.push(favShowCard);
    // save into local storage
    updateLocalStorage();
}

function paintFavShowList() {
    // get favs from local storage
    const favsInfoList = JSON.parse(localStorage.getItem('favShows'));
    //paint title
    addSectionTitle('favs');
    //paint remove button
    addRemoveAllFavsButton();
    // clean favs list
    const favsList = document.querySelector('.js-favs-list');
    favsList.innerHTML = '';
    // Iterate local storage info
    for (let i = 0; i < favsInfoList.length; i++) {
        // Paint card info
        let newLi = addLi(favsList, 'favs');
        addShowId(favsInfoList[i], newLi);
        addShowImage(favsInfoList[i], newLi);
        addShowTitle(favsInfoList[i], newLi);
        // Add a delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fa fa-times-circle js-delete-icon');
        newLi.appendChild(deleteIcon);
    }
    // Listen to delete icon button
    listenToDeleteIcons();
}

function updateLocalStorage() {
    localStorage.setItem('favShows', JSON.stringify(favs));
    paintFavShowList();
}
