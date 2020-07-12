'use strict';

function listenClicksOnPaintedResults() {
    const showCards = document.querySelectorAll('.js-results-list__showcard');
    for (const showCard of showCards) {
        showCard.addEventListener('click', saveAsFav);
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
    // add title
    const sectionTitle = document.querySelector('.fav-list__title');
    sectionTitle.classList.remove('hidden');
    // get favs from local storage
    const favsInfoList = JSON.parse(localStorage.getItem('favShows'));
    //paint title
    const sectionTitle = document.querySelector('.favs-list__title');
    sectionTitle.classList.remove('hidden');
    // clean favs list
    const favsList = document.querySelector('.js-favs-list');
    favsList.innerHTML = '';
    // Iterate local storage info
    for (let i = 0; i < favsInfoList.length; i++) {
        // Add li
        const newLi = document.createElement('li');
        favsList.appendChild(newLi);
        // Assign class name to li
        newLi.setAttribute('class', 'js-fav-list__showcard');
        // Assign id number to li
        newLi.setAttribute('id', favsInfoList[i].show.id);
        // Add img and image
        addFavsImage(favsInfoList[i], newLi);
        // Add h2 and title
        const newTitle = document.createElement('h3');
        newLi.appendChild(newTitle);
        newTitle.innerHTML = favsInfoList[i].show.name;
        // Add a delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fa fa-times-circle js-delete-icon');
        newLi.appendChild(deleteIcon);
    }
    // Listen to delete icon button
    listenToDeleteIcons();
}

function addFavsImage(element, newLi) {
    const newImage = document.createElement('img');
    newLi.appendChild(newImage);
    if (!element.show.image) {
        newImage.src =
            'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    } else {
        newImage.src = element.show.image.medium;
    }
}

function updateLocalStorage() {
    localStorage.setItem('favShows', JSON.stringify(favs));
    paintFavShowList();
}
