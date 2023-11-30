'use strict';

export const createCard = (classItem, parent, img, alt, title, dataAttribute, boolean = true) => {
  const card = document.createElement('div');

  card.classList.add(classItem);
  card.setAttribute('data-id', dataAttribute);
  card.innerHTML = `
  <img class="${classItem}__img" src="${img}" alt="${alt}">
  <h4 class="${classItem}__title">${title}</h4>
  <button class="${classItem}__btn">Learn more</button>
  `

  if (boolean) {
    parent.append(card);
  } else {
    parent.prepend(card);
  }
};