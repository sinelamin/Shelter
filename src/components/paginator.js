'use strict';

import db from '../db.json';
import { createCard } from './createCard';

console.log('work!');

// Измеряем ширину экрана
/*
  В зависимости от ширины считаем количесвто карточек, которое будт отрисовано на странице {
    if (widthHTML > 1249px) {
      render(db.cards.length <= 8)
    }

    if (widthHTML <= 1249px && widthHTML >= 600) {
      render(db.cards.length <= 6)
    }

    if (widthHTML < 600) {
      render(db.cards.length <= 3)
    }
  }
*/

// находим колличесвто страниц с карточками 
//    const stepPaginator = Math.ceil(db.cards.length / карточек на стрнанице)



const paginatorList = document.querySelector('.paginator-list');

const navigationCount = document.querySelector('.paginator-number');

const btnLeft = document.querySelector('.paginator-btn__left');
const btnRight = document.querySelector('.paginator-btn__right');
const btnSuperleft = document.querySelector('.paginator-btn__superleft');
const btnSuperright = document.querySelector('.paginator-btn__superright');

const htmlWidth = document.documentElement.offsetWidth;
const totalCards = db.cards.length;
const countRenderCards = countCardsOnPage(htmlWidth, totalCards);
const stepPaginator = Math.ceil(db.cards.length / countRenderCards);

let positionSlide = 1;


console.log('stepPaginator', stepPaginator);

function renderCardsPaginator(parent) {
  for (let i = 0; i < countRenderCards; i += 1) {
    const imgFilename = db.cards[i].img;

    const imgHash = require(`../img/${imgFilename}`);

    createCard('paginator-card', parent, imgHash, db.cards[i].alt, db.cards[i].title, db.cards[i].id);
  }
}

function countCardsOnPage(htmlWidth, totalCards) {
  if (htmlWidth > 1249) {
    return totalCards >= 8 ? 8 : totalCards;
  }

  if (htmlWidth <= 1249 && htmlWidth >= 600) {
    return totalCards >= 6 ? 6 : totalCards;
  }

  if (htmlWidth < 600) {
    return totalCards >= 3 ? 3 : totalCards;
  }
}

function changePosition(positionSlide, navigationCount) {
  navigationCount.textContent = positionSlide;
};

changePosition(positionSlide, navigationCount);

renderCardsPaginator(paginatorList);

btnRight.addEventListener('click', () => {
  positionSlide += 1;
  changePosition(positionSlide, navigationCount);
})

btnLeft.addEventListener('click', () => {
  positionSlide -= 1;
  changePosition(positionSlide, navigationCount);
})

// console.log(htmlWidth);