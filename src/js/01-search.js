'use strict';

// variables
let results = [];
let favs = [];

listenToSearchButton();
paintFavs();

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
    // Add section title
    addSectionTitle('results');
    // Paint card info
    for (const result of results) {
        let newLi = addLi(resultsList, 'results');
        newLi.setAttribute('id', result.show.id);
        addShowImage(result, newLi);
        addShowTitle(result, newLi);
        checkIsFavAlready(newLi);
    }

    listenClicksOnPaintedResults();
}

function addSectionTitle(stringlistname) {
    const sectionTitle = document.querySelector(
        `.${stringlistname}-list__title`
    );
    sectionTitle.classList.remove('hidden');
}

function addLi(selector, list) {
    const newLi = document.createElement('li');
    selector.appendChild(newLi);
    newLi.setAttribute('class', `js-${list}-list__showcard`);
    return newLi;
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

function checkIsFavAlready(newLi) {
    // comprobar id de ficha con array favs
    const alreadyFavShow = favs.find((fav) => {
        return fav.show.id === parseInt(newLi.id);
    });
    // si coincide -> aplicar color
    if (alreadyFavShow) {
        newLi.classList.add('fav-show');
    }
}
