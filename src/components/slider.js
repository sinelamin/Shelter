'use strict';

//Infinite random slider

import db from '../db.json';
import { createCard } from './createCard';
import { disableArrowBtn } from './disableArrowBtn';
import { enabledArrowBtn } from './enabledArrowBtn';

function addSlider() {
  const renderCards = (parent, step) => {
    for (let i = 0; i < (step * 3); i += 1) {
      const imgFilename = db.cards[i].img;

      const imgHash = require(`../img/${imgFilename}`);

      createCard(
        'slider-card',
        parent,
        imgHash,
        db.cards[i].alt,
        db.cards[i].title,
        db.cards[i].id
      );
    }
  };

  const setCardsWidth = (cards, sliderWrapperWidth, marginCard, step) => {
    cards.forEach(card => {
      card.style.minWidth = `${Math.floor((sliderWrapperWidth / step) - marginCard)}px`;
    });
  };

  const getStep = (htmlWidth) => {
    let value;
    if (htmlWidth > 880) {
      value = 3;
    }

    if (htmlWidth > 600 && htmlWidth < 881) {
      value = 2;
    }

    if (htmlWidth > 300 && htmlWidth < 601) {
      value = 1;
    }

    return value;
  };

  const sliderList = document.querySelector('.slider-list');

  const htmlWidth = document.documentElement.offsetWidth;

  const step = getStep(htmlWidth);

  const getMarginCard = (cards) => {
    const marginCss = getComputedStyle(cards[0]).getPropertyValue('margin');
    const indexSpace = marginCss.indexOf(' ');
    const margin = +marginCss.slice(indexSpace, -2) * 2;

    return margin;
  };

  const deleteExtraCards = (step, cards, position) => {
    if (position == 0) { // напрвление лево
      for (let i = ((step * 3) - 1); i > ((step * 2) - 1); i -= 1) {
        cards[i].remove();
      }
    } else { // напрвление право
      for (let i = 0; i < step; i += 1) {
        cards[i].remove();
      }
    }
  };

  const addNewCards = (step, sliderList, position) => {

    let arr = [];

    if (position != 0) { // напрвление право
      for (let i = step; i < (step * 2); i += 1) {
        arr.push(+document.querySelectorAll('.slider-card')[i].getAttribute('data-id'));
      }
    } else {
      for (let i = 0; i < step; i += 1) { // напрвление лево
        arr.push(+document.querySelectorAll('.slider-card')[i].getAttribute('data-id'));
      }
    }

    let newRandomArr = getRandomArr(arr, step);

    const boolean = position != 0 ? true : false;

    for (let i = 0; i < step; i += 1) {
      const imgFilename = db.cards[newRandomArr[i]].img;

      const imgHash = require(`../img/${imgFilename}`);

      createCard(
        'slider-card',
        sliderList,
        imgHash,
        db.cards[newRandomArr[i]].alt,
        db.cards[newRandomArr[i]].title,
        db.cards[newRandomArr[i]].id,
        boolean
      );
    }
  };

  const getRandomIntIgetRandomArrnclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomArr = (arr, step) => {
    let randomArr = [];
    let randomNum;

    let numberOfCardOptions = db.cards.length - 1;

    while (randomArr.length < step) {
      randomNum = getRandomIntIgetRandomArrnclusive(0, numberOfCardOptions);

      if (!arr.includes(randomNum) && !randomArr.includes(randomNum)) {
        randomArr.push(randomNum);
      }
    }

    console.log(randomArr);
    return randomArr;
  };

  renderCards(sliderList, step);

  const slider = document.querySelector('.slider');
  const arrowleft = document.querySelector('.slider-arrow__left');
  const arrowRight = document.querySelector('.slider-arrow__right');
  const cards = document.querySelectorAll('.slider-card');

  const marginCard = getMarginCard(cards);

  const sliderWrapperWidth = slider.offsetWidth;

  setCardsWidth(cards, sliderWrapperWidth, marginCard, step);

  const cardWidth = cards[0].offsetWidth;

  const offset = (cardWidth + marginCard) * step;

  let position = -offset;

  sliderList.style.transition = 'none';
  sliderList.style.transform = `translateX(${position}px)`;

  function newCards() {
    addNewCards(step, sliderList, position);

    setCardsWidth(
      document.querySelectorAll('.slider-card'),
      sliderWrapperWidth,
      marginCard,
      step
    );
  }


  arrowRight.addEventListener('click', () => {
    disableArrowBtn(arrowRight);

    sliderList.style.transition = 'transform 1s';
    sliderList.style.transform = `translateX(${position -= offset}px)`;

    setTimeout(() => {
      deleteExtraCards(
        step,
        document.querySelectorAll('.slider-card'),
        position
      ); // удаляем левые карточки

      newCards(); // добавляем правые карточки

      sliderList.style.transition = 'none';
      sliderList.style.transform = `translateX(${position += offset}px)`; // смещение на position == -offset

      enabledArrowBtn(arrowRight);
    }, 1000);
  });

  arrowleft.addEventListener('click', () => {
    disableArrowBtn(arrowleft);

    sliderList.style.transition = 'transform 1s';
    sliderList.style.transform = `translateX(${position += offset}px)`;

    setTimeout(() => {
      deleteExtraCards(
        step,
        document.querySelectorAll('.slider-card'),
        position
      ); // удаляем правые карточки

      newCards(); // добавляем левые карточки

      sliderList.style.transition = 'none';
      sliderList.style.transform = `translateX(${position -= offset}px)`; // смещение на position == 0

      enabledArrowBtn(arrowleft);
    }, 1000);
  });
}



if (`${document.location.pathname.slice(0, -5)}` == '/index' || `${document.location.pathname}` == '/') {
  addSlider();
};