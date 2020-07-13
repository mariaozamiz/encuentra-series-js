'use strict';

// selectors

function deleteFavs(event) {
    // Identify clicked show to delete by id
    let cardShowToDelete = document.getElementById(
        event.currentTarget.parentElement.id
    );
    // Find clicked show to delete at favs array
    const showToDelete = favs.findIndex((fav) => {
        return fav.show.id === parseInt(cardShowToDelete.id);
    });

    // retireEmphasis(cardShowToDelete);

    favs.splice(showToDelete, 1);

    updateLocalStorage();
    paintFavs();
    paintResults();
}
