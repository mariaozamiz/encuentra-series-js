'use strict';

// PAINTING ____________________________________________________________

function addSectionTitle(stringlistname) {
    const sectionTitle = document.querySelector(
        `.${stringlistname}-list__title`
    );
    sectionTitle.classList.remove('hidden');
}

function addLi(selector, list) {
    const newLi = document.createElement('li');
    selector.appendChild(newLi);
    newLi.setAttribute('class', `js-${list}-list__showcard`);
    return newLi;
}

function addShowId(list, parent) {
    parent.setAttribute('id', list.show.id);
}

function addShowImage(list, parent) {
    const newImage = document.createElement('img');
    parent.appendChild(newImage);
    if (!list.show.image) {
        newImage.src =
            'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    } else {
        newImage.src = list.show.image.medium;
    }
}

function addShowTitle(list, parent) {
    const newTitle = document.createElement('h3');
    parent.appendChild(newTitle);
    newTitle.innerHTML = list.show.name;
}

function addRemoveAllButton() {
    const removeButton = document.querySelector('.js-favs-list__remove-button');
    removeButton.classList.remove('hidden');
}

function showWarningMessage() {
    const warningText = document.querySelector('.warning-text');
    warningText.innerHTML = 'Realiza una búsqueda para comenzar';
}

function deleteAllFavs() {
    removeButton.classList.add('hidden');
    favs = [];
    updateLocalStorage();
}

// DELETING ____________________________________________________________

function deleteFav(element) {
    const indexOfshowToDelete = favs.indexOf(element);
    favs.splice(indexOfshowToDelete, 1);
}

function listenToDeleteAllButton() {
    removeButton.addEventListener('click', deleteAllFavs);
}
