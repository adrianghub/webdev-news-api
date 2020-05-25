import '../scss/style.scss';
import { WebDevNews } from './News';

const eventWrapper = document.querySelector('.event-wrapper');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
    eventWrapper.classList.toggle('event-wrapper--open');
    if (eventWrapper.classList.contains('event-wrapper--open')) {
        burgerMenu.innerHTML = '✖'
    } else {
        burgerMenu.innerHTML = '🍔'
    }
});


const articlesCatalog = new WebDevNews();
articlesCatalog.initializeArticlesCatalog();
