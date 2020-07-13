'use strict';

// selectors
const searchButton = document.querySelector('.js-search-form__button');
const removeButton = document.querySelector('.js-favs-list__remove-button');
const resultsList = document.querySelector('.js-results-list');

// listeners
searchButton.addEventListener('click', readInput);

// variables
let results = [];
let favs = [];

// read and check input value
function readInput(event) {
    event.preventDefault();
    const searchField = document.querySelector('.js-search-form__input');
    let inputValue = searchField.value;
    makeRequest(inputValue);
}

// make API request and save results
function makeRequest(inputValue) {
    fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Save data
            results = data;
            paintResults();
        });
}

//Pain results in HTML
function paintResults() {
    // Clear results page
    resultsList.innerHTML = '';
    // Add section title
    addSectionTitle('results');
    for (const result of results) {
        // Paint card info
        let newLi = addLi(resultsList, 'results');
        addShowId(result, newLi);
        addShowImage(result, newLi);
        addShowTitle(result, newLi);
    }

    listenClicksOnPaintedResults();
}
