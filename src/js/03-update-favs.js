'use strict';

// listen to delete icons on favs painted list
function listenToDeleteIcons() {
    const deleteIcons = document.querySelectorAll('.js-delete-icon');
    for (const deleteIcon of deleteIcons) {
        deleteIcon.addEventListener('click', updateFavs);
    }
}

function updateFavs(event) {
    // Identify clicked show to delete by id
    const cardShowToDeleteId = event.currentTarget.parentElement.id;
    const cardShowToDelete = document.getElementById(cardShowToDeleteId);
    // Find clicked card's info at favs array
    const showToDelete = favs.find((fav) => {
        return fav.show.id === parseInt(cardShowToDelete.id);
    });
    // Delete card from favs array
    const indexOfshowToDelete = favs.indexOf(showToDelete);
    favs.splice(indexOfshowToDelete, 1);
    // Update in local storage
    updateLocalStorage();
}
