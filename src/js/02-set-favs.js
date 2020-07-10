'use strict';

// Pic favs among search results

function saveAsFav(event) {
    const showCard = event.target.parentElement;
    //Mark with new background-color and text color at search results
    showCard.classList.add('fav-show');
    //Add show to Favs
    favs.push(showCard);
    console.log(favs);
}

resultsList.addEventListener('click', saveAsFav);

const favShowsList = document.querySelector('.js-favs-list');
