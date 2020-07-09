'use strict';

let searchResults;

// action button selection and listener
const searchButton = document.querySelector('.js-search-form__button');
searchButton.addEventListener('click', readInput);

// on button click, check and read input value
function readInput() {
    event.preventDefault();
    const searchField = document.querySelector('.js-search-form__input');
    let inputValue = searchField.value;
    if (inputValue) {
        makeRequest(inputValue);
    } else {
        console.log('NO hay texto en el input');
    }
}

// API request
function makeRequest(inputValue) {
    console.log(inputValue);
    fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            searchResults = data;
            paintSearchResults();
        });
}

// Paint API results on HTML
function paintSearchResults() {
    const resultsList = document.querySelector('.js-results-list');
    console.log(searchResults);
    for (const result of searchResults) {
        //Create HTML tags
        const newLi = document.createElement('li');
        resultsList.appendChild(newLi);
        const newImage = document.createElement('img');
        newLi.appendChild(newImage);
        const newTitle = document.createElement('h2');
        newLi.appendChild(newTitle);

        newImage.src = result.show.image.medium;
    }
}
