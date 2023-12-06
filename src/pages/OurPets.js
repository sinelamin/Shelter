'use strict';

import { imgObj } from "../components/importImg";

export function pageOurPets() {
  const body = document.querySelector('body');


  body.innerHTML = `
    <header class="header header--OurPets">
      <div class="container">
        <div class="header-top">
          <a class="header-logo" href="/">
            Cozy House
            <span class="header-logo__sub">
              Shelter for pets in Boston
            </span>
          </a>

          <nav class="header-menu">
            <div class="burger">
              <span class="burger__item"></span>
              <span class="burger__item"></span>
              <span class="burger__item"></span>
            </div>
            
            <ul class="header-list">
              <li class="header-list__item">
                <a class="header-list__link" href="/">
                  About the shelter
                </a>
              </li>
              <li class="header-list__item">
                <a class="header-list__link" href="/ourPets">
                  Our pets
                </a>
              </li>
              <li class="header-list__item">
                <a class="header-list__link" href="/#help">
                  Help the shelter
                </a>
              </li>
              <li class="header-list__item">
                <a class="header-list__link" href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>
        </nav>
      </div>
  </header>

  <section class="pets pets--ourPets" id="pets">
    <div class="container">
      <div class="pets-wrapper">
        <h3 class="pets__title">
          Our friends who
          <span class="pets__subtitle">
            are looking for a house
          </span>
        </h3>
        <div class="paginator">
          <div class="paginator-list">
          </div>
          <div class="paginator-navigation">
            <div class="paginator-btn__superleft">
              &#60;&#60;
            </div>
            <div class="paginator-btn__left">
              &#60;
            </div>
            <div class="paginator-number">
              1
            </div>
            <div class="paginator-btn__right">
              &#62;
            </div>
            <div class="paginator-btn__superright">
              &#62;&#62;
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer" id="contacts">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-contents">
          <div class="footer-contacts">
            <h3 class="footer-contacts__title">
              For questions and suggestions
            </h3>
            <a class="footer-contacts__link" href="mailto:email@shelter.com">
              <img class="footer-contacts__icon" src="${imgObj.iconEmail}" alt="icon-email">
              <p class="footer-contact__text">
                email@shelter.com
              </p>
            </a>
            <a class="footer-contacts__link" href="tel:+136745677554">
              <img class="footer-contacts__icon" src="${imgObj.iconPhone}" alt="icon-phone">
              <p class="footer-contact__text">
                +13 674 567 75 54
              </p>
            </a>
          </div>

          <div class="footer-adress">
            <h3 class="footer-adress__title">
              We are waiting for your visit
            </h3>
            <div class="footer-adress__item">
              <img class="footer-adress__icon" src="${imgObj.iconMarker}" alt="icon-marker">
              <p class="footer-adress__text">
                1 Central Street, Boston (entrance from the store)
              </p>
            </div>
            <div class="footer-adress__item">
              <img class="footer-adress__icon" src="${imgObj.iconMarker}" alt="icon-marker">
              <p class="footer-adress__text">
                18 South Park, London
              </p>
            </div>
          </div>
        </div>
        <img class="footer__img" src="${imgObj.footerPuppy}" alt="dog-puppy">
      </div>
    </div>
  </footer>
  `
}