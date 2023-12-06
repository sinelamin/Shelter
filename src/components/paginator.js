'use strict';

import db from '../db.json';
import { createCard } from './createCard';
import { disableArrowBtn } from './disableArrowBtn';
import { enabledArrowBtn } from './enabledArrowBtn';

export function addPaginator() {
  const paginatorList = document.querySelector('.paginator-list');

  const navigationCount = document.querySelector('.paginator-number');

  const btnLeft = document.querySelector('.paginator-btn__left');
  const btnRight = document.querySelector('.paginator-btn__right');
  const btnSuperLeft = document.querySelector('.paginator-btn__superleft');
  const btnSuperRight = document.querySelector('.paginator-btn__superright');

  const htmlWidth = document.documentElement.offsetWidth;
  const totalCards = db.cards.length;
  const countRenderCards = countCardsOnPage(htmlWidth, totalCards);
  const stepsPaginator = Math.ceil(db.cards.length / countRenderCards);

  let positionSlide = 1;
  let startPosition = 0;

  function renderCardsPaginator(parent, startPosition) {
    let numberOfCards;

    if ((totalCards - startPosition) >= countRenderCards) {
      numberOfCards = (countRenderCards * positionSlide);
    } else {
      numberOfCards = totalCards;
    }

    for (let i = startPosition; i < numberOfCards; i += 1) {
      const imgFilename = db.cards[i].img;

      const imgHash = require(`../img/${imgFilename}`);

      createCard(
        'paginator-card',
        parent,
        imgHash,
        db.cards[i].alt,
        db.cards[i].title,
        db.cards[i].id
      );
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

  function renoveCards(cards) {
    cards.forEach(card => {
      card.remove()
    });
  }

  disableArrowBtn(btnLeft, 'paginator');
  disableArrowBtn(btnSuperLeft, 'paginator');

  changePosition(positionSlide, navigationCount);

  renderCardsPaginator(paginatorList, startPosition);

  btnRight.addEventListener('click', () => {
    positionSlide += 1;
    changePosition(positionSlide, navigationCount);

    enabledArrowBtn(btnLeft, 'paginator');
    enabledArrowBtn(btnSuperLeft, 'paginator');

    startPosition += countRenderCards;

    renoveCards(document.querySelectorAll('.paginator-card'));
    renderCardsPaginator(paginatorList, startPosition);

    if (positionSlide == stepsPaginator) {
      disableArrowBtn(btnRight, 'paginator');
      disableArrowBtn(btnSuperRight, 'paginator');
    }
  })

  btnLeft.addEventListener('click', () => {
    positionSlide -= 1;
    changePosition(positionSlide, navigationCount);

    enabledArrowBtn(btnRight, 'paginator');
    enabledArrowBtn(btnSuperRight, 'paginator');

    startPosition -= countRenderCards;

    renoveCards(document.querySelectorAll('.paginator-card'));
    renderCardsPaginator(paginatorList, startPosition);

    if (positionSlide == 1) {
      disableArrowBtn(btnLeft, 'paginator');
      disableArrowBtn(btnSuperLeft, 'paginator');
    }
  })

  btnSuperRight.addEventListener('click', () => {
    disableArrowBtn(btnRight, 'paginator');
    disableArrowBtn(btnSuperRight, 'paginator');

    positionSlide = stepsPaginator;
    changePosition(positionSlide, navigationCount);

    enabledArrowBtn(btnLeft, 'paginator');
    enabledArrowBtn(btnSuperLeft, 'paginator');

    startPosition = (countRenderCards * positionSlide) - countRenderCards;

    renoveCards(document.querySelectorAll('.paginator-card'));
    renderCardsPaginator(paginatorList, startPosition);
  })

  btnSuperLeft.addEventListener('click', () => {
    disableArrowBtn(btnLeft, 'paginator');
    disableArrowBtn(btnSuperLeft, 'paginator');

    positionSlide = 1;
    changePosition(positionSlide, navigationCount);

    enabledArrowBtn(btnRight, 'paginator');
    enabledArrowBtn(btnSuperRight, 'paginator');

    startPosition = 0;

    renoveCards(document.querySelectorAll('.paginator-card'));
    renderCardsPaginator(paginatorList, startPosition);
  })
}