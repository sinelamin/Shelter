'use strict';

import db from '../db.json';

// console.log('work!');

const sliderList = document.querySelector('.slider-list');


function createCard(parent, img, alt, title) {
  const card = document.createElement('div');

  card.classList.add('slider-list__card');
  card.innerHTML = `
  <img class="slider-card__img" src="${img}" alt="${alt}">
  <h4 class="slider-card__title">${title}</h4>
  <button class="slider-card__btn">Learn more</button>
  `

  parent.append(card);
};

function renderCards() {
  db.cards.forEach(({ img, alt, title }) => {
    const imgFilename = img;

    const imgHash = require(`../img/${imgFilename}`);

    createCard(sliderList, imgHash, alt, title);
  });
};

renderCards();