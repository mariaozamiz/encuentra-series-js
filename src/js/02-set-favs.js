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
    localStorage.setItem('favShows', JSON.stringify(favs));
    paintFavShowList();
}

function paintFavShowList() {
    // get favs from local storage
    const favsInfoList = JSON.parse(localStorage.getItem('favShows'));
    console.log(favsInfoList);
    const favsList = document.querySelector('.js-favs-list');
    favsList.innerHTML = '';
    // Iterate local storage info
    for (let i = 0; i < favsInfoList.length; i++) {
        // Add li
        const newLi = document.createElement('li');
        favsList.appendChild(newLi);
        // Assign class name to li
        newLi.setAttribute('class', 'js-fav-list__showcard');
        // Add img and image results
        addFavsImage(favsInfoList[i], newLi);
        // Add h2 and title results
        const newTitle = document.createElement('h3');
        newLi.appendChild(newTitle);
        newTitle.innerHTML = favsInfoList[i].show.name;
    }
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
