import { pageLoad } from './home.js';
import { displayMenu } from './menu.js';
import { displayContactPage } from './contact.js';

pageLoad();

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');

homeButton.addEventListener('click', pageLoad);
homeButton.addEventListener('click', () => {
  menuSwitch(menuButton, contactButton, homeButton);
})
menuButton.addEventListener('click', displayMenu);
menuButton.addEventListener('click', () => {
  menuSwitch(homeButton, contactButton, menuButton);
})
contactButton.addEventListener('click', displayContactPage);
contactButton.addEventListener('click', () => {
  menuSwitch(menuButton, homeButton, contactButton);
})

console.log('Hiiii');


function menuSwitch(btn1, btn2, btn3) {
  if (!btn1.classList.contains('clicked') && !btn2.classList.contains('clicked')) {
    btn3.classList.add('clicked');
  } else if (btn1.classList.contains('clicked') || btn2.classList.contains('clicked')) {
    btn1.classList.remove('clicked');
    btn2.classList.remove('clicked');
    btn3.classList.add('clicked');
  }
}
