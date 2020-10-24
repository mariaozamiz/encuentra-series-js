'use strict';

function createCard(list, element) {
    const newLi = document.createElement('li');
    list.appendChild(newLi);
    newLi.setAttribute('id', element.show.id);
    addImage(newLi, element);
    addTitle(newLi, element);
    return newLi;
}

function addImage(newLi, element) {
    const newImage = document.createElement('img');
    newLi.appendChild(newImage);
    if (!element.show.image) {
        newImage.src =
            'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    } else {
        newImage.src = element.show.image.medium;
    }
}

function addTitle(newLi, element) {
    const newTitle = document.createElement('h3');
    newLi.appendChild(newTitle);
    newTitle.innerHTML = element.show.name;
}
