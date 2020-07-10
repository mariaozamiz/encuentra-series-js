'use strict';

// Pic favs among search results
function setAsFav(event) {
    //Change background and text color (NO FUNCIONA 100%)
    let showCard = event.target;
    showCard.classList.add('fav-show');
    //Add show to Favs
    favs.push(showCard);
}

showsList.addEventListener('click', setAsFav);
