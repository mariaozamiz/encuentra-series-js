'use strict';

// selectors
const searchButton = document.querySelector('.js-search-form__button');

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

// Paint results on HTML
function paintResults() {
    const resultsList = document.querySelector('.js-results-list');
    // Add title
    const sectionTitle = document.querySelector('.results-list__title');
    sectionTitle.classList.remove('hidden');
    // Iterate results
    for (const result of results) {
        // Add li
        const newLi = document.createElement('li');
        resultsList.appendChild(newLi);
        // Assign class name to li
        newLi.setAttribute('class', 'js-results-list__showcard');
        // Assign id number to li
        newLi.setAttribute('id', result.show.id);
        // Add img and image results
        addImage(result, newLi);
        // Add h2 and title results
        const newTitle = document.createElement('h3');
        newLi.appendChild(newTitle);
        newTitle.innerHTML = result.show.name;
    }
    listenClicksOnPaintedResults();
}

function addImage(result, newLi) {
    const newImage = document.createElement('img');
    newLi.appendChild(newImage);
    if (!result.show.image) {
        newImage.src =
            'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    } else {
        newImage.src = result.show.image.medium;
    }
}

// show warning message
function showWarningMessage() {
    const warningText = document.querySelector('.warning-text');
    warningText.innerHTML = 'Realiza una búsqueda para comenzar';
}
