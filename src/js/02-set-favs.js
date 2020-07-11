'use strict';

function listenPaintedResultClicks() {
    const showCards = document.querySelectorAll('.js-results-list__showcard');
    for (const showCard of showCards) {
        showCard.addEventListener('click', saveAsFav);
    }
}

function saveAsFav(event) {
    // Find by id
    const clickedShowCardId = event.currentTarget.id;
    const favShow = document.getElementById(clickedShowCardId);
    // Highlight show at search results
    favShow.classList.toggle('fav-show');
    // Find fav show data in searchResults
    const favShowMatch = searchResults.find((result) => {
        return result.show.id === parseInt(favShow.id);
    });
    // Push fav show into favs array
    favs.push(favShowMatch);
    // Call painting function
    paintFavShowList();
}

function paintFavShowList() {
    for (const element of favs) {
        const favsList = document.querySelector('.js-favs-list');
        // Add li
        const newLi = document.createElement('li');
        favsList.appendChild(newLi);
        // Assign class name to li
        newLi.setAttribute('class', 'js-fav-list__showcard');
        newLi.setAttribute('class', 'fav-show');
        // Add img and image results
        addFavsImage(element, newLi);
        // Add h2 and title results
        const newTitle = document.createElement('h2');
        newLi.appendChild(newTitle);
        newTitle.innerHTML = element.show.name;
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
}
