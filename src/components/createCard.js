'use strict';

export const createCard = (classItem, parent, img, alt, title, dataAttribute, boolean = true) => {
  const card = document.createElement('div');

  card.classList.add(classItem);
  card.setAttribute('data-id', dataAttribute);
  card.innerHTML = `
  <img class="card__img" src="${img}" alt="${alt}">
  <h4 class="card__title">${title}</h4>
  <button class="card__btn">Learn more</button>
  `

  if (boolean) {
    parent.append(card);
  } else {
    parent.prepend(card);
  }
};