const content = document.querySelector('#content');

export function displayContactPage() {
  content.innerHTML = '';
  document.body.style = 'background: none; background-color: lightpink;';

  let header = document.createElement('h1');
  header.textContent = 'CONTACT US!';
  content.appendChild(header);
}