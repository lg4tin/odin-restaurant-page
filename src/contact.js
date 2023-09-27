const content = document.querySelector('#content');

export function displayContactPage() {
  content.innerHTML = '';
  content.style = 'padding-top: 20px;'
  document.body.style = 'background: none; background-color: beige;';

  let header = document.createElement('h1');
  header.textContent = 'CONTACT US!';
  header.style = 'color: black;'
  content.appendChild(header);

  let infoContainer = document.createElement('div');
  infoContainer.classList.add('menu-container');
  content.appendChild(infoContainer);

  let address = document.createElement('div');
  address.textContent = '555 Main St Tampa FL, 33614';
  infoContainer.appendChild(address);

  let email = document.createElement('div');
  email.textContent = 'Email us at me@bestpizzashop.com';
  infoContainer.appendChild(email);

  let phoneNum = document.createElement('div');
  phoneNum.textContent = 'Call us at 555-555-5555';
  infoContainer.appendChild(phoneNum);
}