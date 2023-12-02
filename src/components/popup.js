'use strict';

import db from '../db.json';

const petsSection = document.querySelector('.pets');
let target;

if (document.querySelector('.slider-list')) {
  target = document.querySelector('.slider-list');
} else {
  target = document.querySelector('.paginator-list');
}

function createPopup(
  parent,
  img,
  alt,
  title,
  breed,
  descr,
  age,
  inoculations,
  diseases,
  parasites
) {
  const popup = document.createElement('div');

  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-wrapper">
      <img class="popup-img" src="${img}" alt="${alt}">
      <div class="popup-info">
        <h4 class="popup-title">
        ${title}
          <span class="popup-subtitle">${breed}</span>
        </h4>
        <p class="popup-descr">${descr}</p>

        <ul class="popup-parameters">
          <li class="popup-parameter">
            Age: <span class="popup-parameter__value">${age}</span>
          </li>
          <li class="popup-parameter">
            Inoculations: <span class="popup-parameter__value">${inoculations}</span>
          </li>
          <li class="popup-parameter">
            Diseases: <span class="popup-parameter__value">${diseases}</span>
          </li>
          <li class="popup-parameter">
            Parasites: <span class="popup-parameter__value">${parasites}</span>
          </li>
        </ul>
      </div>
      </div>
      <div class="popup-close">×</div>
  `

  parent.append(popup);
}

function renderPopUp(parent, parentBtn) {
  const indexDBCard = parentBtn.getAttribute('data-id');

  const imgFilename = db.cards[indexDBCard].img;

  const imgHash = require(`../img/${imgFilename}`);

  createPopup(
    parent,
    imgHash,
    db.cards[indexDBCard].alt,
    db.cards[indexDBCard].title,
    db.cards[indexDBCard].breed,
    db.cards[indexDBCard].descr,
    db.cards[indexDBCard].age,
    db.cards[indexDBCard].inoculations,
    db.cards[indexDBCard].diseases,
    db.cards[indexDBCard].parasites
  );
}

function removePopUp() {
  document.querySelector('.popup').remove();
}

target.addEventListener('click', (e) => {
  if (e.target.classList.contains('card__btn')) {
    renderPopUp(petsSection, e.target.parentElement);

    petsSection.classList.add('pets-popup--active');
  }
});

petsSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup-close')) {
    removePopUp();
    petsSection.classList.remove('pets-popup--active');
  }
});