'use strict';

// selectors
const searchButton = document.querySelector('.js-search-form__button');
const removeButton = document.querySelector('.js-favs-list__remove-button');

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
    if (inputValue) {
        makeRequest(inputValue);
    } else {
        showWarningMessage();
    }
}

// make API request and save results
function makeRequest(inputValue) {
    fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            results = data;
            results.length === 0
                ? console.log('no hay serie, no')
                : paintResults();
        });
}

//Pain results in HTML
function paintResults() {
    const resultsList = document.querySelector('.js-results-list');
    // Add title
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
