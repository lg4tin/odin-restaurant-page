const content = document.querySelector('#content');

export function pageLoad() {
  function add(item) {
    content.appendChild(item);
  }

  let header = document.createElement('h1');
  header.textContent = 'The Best Pizza Shop';
  

  let ul = document.createElement('ul');
  ul.innerHTML = `
    <li>Home</li>
    <li>Menu</li>
    <li>Contact Us</li>
  `;
  ul.classList.add('nav-bar');
  add(ul);

  let navBar = document.createElement('div');
  navBar.classList.add('nav-bar-header')
  add(navBar);
  navBar.appendChild(header);
  navBar.appendChild(ul);

  let callToAction = document.createElement('h1');
  callToAction.textContent = 'Come on down for some delicious pizza!';
  add(callToAction);

  let tampa = document.createElement('h4');
  tampa.textContent = 'The Best in all of Tampa!';
  add(tampa);

  let orderButton = document.createElement('button');
  orderButton.textContent = 'Order Now!';
  add(orderButton);

  let restaurantInfo = document.createElement('div');
  restaurantInfo.innerHTML = `
    <div>
      <div>
        <p>sdcdscdsc</p>
      </div>
      <div>
        <p>sdcdscdsc</p>
        <p>sdcdscdsc</p>
      </div>
      <div>
        <p>sdcdscdsc</p>
      </div>
      <div>
        <p>sdcdscdsc</p>
        <p>sdcdscdsc</p>
      </div>
    </div>
    <div>
    <div>
        <p>sdcdscdsc</p>
      </div>
      <div>
        <p>sdcdscdsc</p>
        <p>sdcdscdsc</p>
      </div>
      <div>
        <p>sdcdscdsc</p>
      </div>
      <div>
        <p>sdcdscdsc</p>
        <p>sdcdscdsc</p>
      </div>
    </div>
  `;
  restaurantInfo.classList.add('info');
  add(restaurantInfo);
}

export function hi() {
  alert('hi');
}
