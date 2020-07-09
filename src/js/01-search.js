'use strict';

//working with search form

const searchButton = document.querySelector('.js-search-form__button');
searchButton.addEventListener('click', readInput);

function readInput() {
    event.preventDefault();
    const searchField = document.querySelector('.js-search-form__input');
    let inputValue = searchField.value;
    console.log(inputValue);
    if (inputValue) {
        console.log('hay texto en el input');
    } else {
        console.log('NO hay texto en el input');
    }
}
