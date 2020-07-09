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
        makeRequest();
    } else {
        console.log('NO hay texto en el input');
    }
}

// API request
function makeRequest(inputValue) {
    fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            searchResults = data;
            console.log(searchResults);
        });
    paintSearchResults();
}

// API request
function paintSearchResults() {
    const SearchResultsList = document.querySelector('.js-results-list');
}
