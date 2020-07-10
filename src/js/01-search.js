'use strict';

let results = [];
let favs = [];

// search button selection and listener
const searchButton = document.querySelector('.js-search-form__button');
searchButton.addEventListener('click', readInput);

// on button click, check and read input value
function readInput(event) {
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
    fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let searchResults = data;
            paintSearchResults(searchResults);
        });
}

// Paint API results on HTML
const resultsList = document.querySelector('.js-results-list');
function paintSearchResults(searchResults) {
    let counter = 0;
    for (const result of searchResults) {
        // Add li
        const newLi = document.createElement('li');
        resultsList.appendChild(newLi);
        //Increment number for li id assigment
        counter++;
        // Assign id number to li
        newLi.setAttribute('id', counter);
        // Add img and image results
        addImage(result, newLi);
        // Add h2 and title results
        const newTitle = document.createElement('h2');
        newLi.appendChild(newTitle);
        newTitle.innerHTML = result.show.name;
    }
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
