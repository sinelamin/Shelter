'use strict';

import { imgObj } from "../components/importImg";

export function pageHome() {
  const body = document.querySelector('body');


  body.innerHTML = `
    <header class="header">
      <div class="container">
        <div class="header-top">
          <a class="header-logo" href="#">
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
                <a class="header-list__link" href="#">
                  About the shelter
                </a>
              </li>
              <li class="header-list__item">
                <a class="header-list__link" href="/ourPets">
                  Our pets
                </a>
              </li>
              <li class="header-list__item">
                <a class="header-list__link" href="#help">
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

        <div class="header-bottom">
          <div class="header-content">
            <h1 class="header-content__title">
              Not only people
              <span class="header-content__subtitle">need a house</span>
            </h1>
            <p class="header-content__descr">
              We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will
              love you more than anybody else in the world, you will see!
            </p>
            <a class="header-content__btn" href="#pets">
              Make a friend
            </a>
          </div>
          <img class="header-img" src="${imgObj.puppy}" alt="start-screean-puppy">
        </div>
      </div>
    </header>

    <section class="about" id="#about">
      <div class="container">
        <div class="about-wrapper">
          <img class="about-img" src="${imgObj.aboutPets}" alt="about-pets">

          <div class="about-content">
            <h3 class="about-content__title">
              About the shelter
              <span class="about-content__subtitle">
                “Cozy House”
              </span>
            </h3>
            <p class="about-content__descr">Currently we have 121 dogs and 342 cats on our hands and statistics show that
              only 20% of them will find a family. The others will continue to live with us and will be waiting for a
              lucky
              chance to become dearly loved.</p>
            <p class="about-content__descr">We feed our wards with the best food and make sure that they do not get sick,
              feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of
              various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals,
              they become attached to the pets and would hardly ever leave them alone.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pets" id="pets">
      <div class="container">
        <div class="pets-wrapper">
          <h3 class="pets__title">
            Our friends who
            <span class="pets__subtitle">
              are looking for a house
            </span>
          </h3>
          <div class="slider">
            <div class="slider-list">
            </div>
          </div>

          <div class="slider-arrow">
            <div class="slider-arrow__left">
              <img class="slider-arrow__img" src="${imgObj.arrowLeft}" alt="button-arrow">
            </div>
            <div class="slider-arrow__right">
              <img class="slider-arrow__img" src="${imgObj.arrowRight}" alt="button-arrow">
            </div>
          </div>

          <a class="pets__btn" href="./ourPets.html">
            Get to know the rest
          </a>
        </div>
      </div>
    </section>

    <section class="help" id="help">
      <div class="comtainer">
        <div class="help-wrapper">
          <h3 class="help__title">
            How you can help
            <span class="help__subtitle">
              our shelter
            </span>
          </h3>
          <div class="help-content">
            <ul class="help-list">
              <li class="help-item">
                <img class="help-item__img" src="${imgObj.petFood}" alt="pet-food">
                <p class="help-item__title">
                  Pet food
                </p>
              </li>
              <li class="help-item">
                <img class="help-item__img" src="${imgObj.transportation}" alt="transportation">
                <p class="help-item__title">
                  Transportation
                </p>
              </li>
              <li class="help-item">
                <img class="help-item__img" src="${imgObj.toys}" alt="">
                <p class="help-item__title">
                  Toys
                </p>
              </li>
              <li class="help-item">
                <img class="help-item__img" src="${imgObj.bowlsAndCups}" alt="toys">
                <p class="help-item__title">
                  Bowls and cups
                </p>
              </li>
              <li class="help-item">
                <img class="help-item__img" src="${imgObj.shampoos}" alt="shampoos">
                <p class="help-item__title">
                  Shampoos
                </p>
              </li>
              <li class="help-item">
                <img class="help-item__img" src="${imgObj.vitamins}" alt="vitamins">
                <p class="help-item__title">
                  Vitamins
                </p>
              </li>
              <li class="help-item">
                <img class="help-item__img" src="${imgObj.medicines}" alt="medicines">
                <p class="help-item__title">
                  Medicines
                </p>
              </li>
              <li class="help-item">
                <img class="help-item__img" src="${imgObj.collarsLeashes}" alt="collars-leashes">
                <p class="help-item__title">
                  Collars / leashes
                </p>
              </li>
              <li class="help-item">
                <img class="help-item__img" src="${imgObj.sleepingArea}" alt="sleeping-area">
                <p class="help-item__title">
                  Sleeping areas
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="donation">
      <div class="container">
        <div class="donation-wrapper">
          <img class="donation-img" src="${imgObj.donationDog}" alt="happy-dog">

          <div class="donation-content">
            <h3 class="donation__title">
              You can also
              <span class="donation__subtitle">
                make a donation
              </span>
            </h3>
            <h4 class="donation__subheading">
              Name of the bank / Type of bank account
            </h4>
            <div class="donation-requisites">
              <img class="donation-requisites__img" src="${imgObj.creditCardImg}" alt="image-credit-card">
              <div class="donation-requisites__number">
                8380 2880 8028 8791 7435
              </div>
            </div>
            <p class="donation__descr">
              Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero
              sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames
              ac ante ipsum primis in faucibus.
            </p>
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