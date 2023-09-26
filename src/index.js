import { pageLoad } from './home.js';
import { displayMenu } from './menu.js';
import { displayContactPage } from './contact.js';

pageLoad();

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');

homeButton.addEventListener('click', pageLoad);
menuButton.addEventListener('click', displayMenu);
contactButton.addEventListener('click', displayContactPage);

console.log('Hiii');



