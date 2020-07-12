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
    let cardShowToDelete = document.getElementById(
        event.currentTarget.parentElement.id
    );
    // Find clicked fav card's info at favs array
    const showToDelete = favs.find((fav) => {
        return fav.show.id === parseInt(cardShowToDelete.id);
    });
    // Find clicked fav card's info at results array in order to unhightlight
    // const showToDelete = results.find((result) => {
    //     return result.show.id === parseInt(cardShowToDelete.id);
    // });
    // if (showToDelete) {
    //     showCard.classList.remove('fav-show');
    deleteFav(showToDelete);
    updateLocalStorage();
}
