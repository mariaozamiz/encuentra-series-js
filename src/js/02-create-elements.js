'use strict';

function createCard(list, element) {
    // create li
    const newLi = document.createElement('li');
    // add to ul
    list.appendChild(newLi);
    // id
    newLi.setAttribute('id', element.show.id);
    // image
    addImage(newLi, element);
    //title
    const newTitle = document.createElement('h3');
    newLi.appendChild(newTitle);
    newTitle.innerHTML = element.show.name;
    return newLi;
}

function addImage(newLi, element) {
    const newImage = document.createElement('img');
    newLi.appendChild(newImage);
    //set img src
    if (!element.show.image) {
        newImage.src =
            'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    } else {
        newImage.src = element.show.image.medium;
    }
}
