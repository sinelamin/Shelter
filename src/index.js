import './index.html';
import './index.scss';
import { pageHome } from './pages/home';
import { pageOurPets } from './pages/OurPets';
import { addBurger } from "./components/burger";
import { addPopUp } from "./components/popup";
import { addSlider } from "./components/slider";
import { addPaginator } from "./components/paginator";

import page from 'page';

const home = () => {
  pageHome();
  addBurger();
  addPopUp();
  addSlider();
  window.addEventListener('resize', (e) => {
    location.reload(); // обновлние страницы для динамической адаптивности
  });
};

const ourPets = () => {
  pageOurPets();
  addBurger();
  addPopUp();
  addPaginator();
  window.addEventListener('resize', (e) => {
    location.reload();
  });
};

// // Определение маршрутов
page('/', home);
page('/ourPets', ourPets);

// // Запуск page.js
page();