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

//Pain results in HTML
function paintResults() {
    // Add title
    const sectionTitle = document.querySelector('.results-list__title');
    sectionTitle.classList.remove('hidden');
    // Iterate results
    const resultsList = document.querySelector('.js-results-list');
    for (const result of results) {
        // Paint card info
        let newLi = addLi(resultsList, 'results');
        addShowId(result, newLi);
        addShowImage(result, newLi);
        addShowTitle(result, newLi);
    }
    listenClicksOnPaintedResults();
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

// show warning message
function showWarningMessage() {
    const warningText = document.querySelector('.warning-text');
    warningText.innerHTML = 'Realiza una búsqueda para comenzar';
}

// create li and add class
function addLi(selector, list) {
    const newLi = document.createElement('li');
    selector.appendChild(newLi);
    newLi.setAttribute('class', `js-${list}-list__showcard`);
    return newLi;
}
