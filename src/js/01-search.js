'use strict';

// variables
let results = [];
let favs = [];

paintFavs();

// search button listener
const searchButton = document.querySelector('.js-search-form__button');
searchButton.addEventListener('click', readInput);

// read input value
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
            results = data;
            paintResults();
        });
}

//Pain results in HTML
function paintResults() {
    const resultsList = document.querySelector('.js-results-list');
    // Clear results page first
    resultsList.innerHTML = '';
    addSectionTitle('results');
    // Paint card info
    for (const result of results) {
        let newLi = createCard(resultsList, result);
        checkIfNeedsHighlight(newLi);
        newLi.addEventListener('click', checkIsFav);
    }
}

// PAINTING __________________________________________

function addSectionTitle(stringlistname) {
    const sectionTitle = document.querySelector(
        `.${stringlistname}-list__title`
    );
    sectionTitle.classList.remove('hidden');
}

function createCard(parent, element) {
    // li
    const newLi = document.createElement('li');
    parent.appendChild(newLi);
    // li atribute
    newLi.setAttribute('id', element.show.id);
    // image
    const newImage = document.createElement('img');
    newLi.appendChild(newImage);
    if (!element.show.image) {
        newImage.src =
            'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
    } else {
        newImage.src = element.show.image.medium;
    }
    // title
    const newTitle = document.createElement('h3');
    newLi.appendChild(newTitle);
    newTitle.innerHTML = element.show.name;
    return newLi;
}

function checkIfNeedsHighlight(newLi) {
    // check if what is painted on results is already at favs
    const alreadyAFav = favs.find((fav) => {
        return fav.show.id === parseInt(newLi.id);
    });
    // highlight
    if (alreadyAFav) {
        newLi.classList.add('yellow-background');
    }
}
