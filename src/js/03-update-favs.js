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
    // Find clicked show to delete at results array
    const showToDelete = favs.find((fav) => {
        return fav.show.id === parseInt(cardShowToDelete.id);
    });
    deleteFav(showToDelete);
    updateLocalStorage();
}

// function retireEmphasis() {
//     const showToDelete = results.find((result) => {
//         return result.show.id === parseInt(cardShowToDelete.id);
// // algo
//  showToDelete.classList.remove('fav-show');
// }
// };
