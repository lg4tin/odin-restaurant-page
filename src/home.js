const content = document.querySelector('#content');

export function pageLoad() {
  function add(item) {
    content.appendChild(item);
  }

  content.innerHTML = '';
  content.style = 'padding-top: 100px;'

  document.body.style = 'background: url("../pics/nik-owens-40OJLYVWeeM-unsplash.jpg"); background-repeat: no-repeat; background-size: cover;'

  let callToAction = document.createElement('h1');
  callToAction.textContent = 'Come on down for some delicious pizza!';
  callToAction.style = 'font-size: 48px;'
  add(callToAction);

  let tampa = document.createElement('h1');
  tampa.textContent = 'The Best in all of Tampa!';
  add(tampa);

  let orderButton = document.createElement('button');
  orderButton.textContent = 'Order Now!';
  add(orderButton);

  let restaurantInfo = document.createElement('div');
  restaurantInfo.innerHTML = `
    <div>
      <div class="menu-info">
      <div>
        <img src="../pics/home-account.svg" alt="gfhgf" class="icons">
      </div>
        <div>
          <p>555 Main St</p>
          <p>Tampa, FL 33614</p>
        </div>
      </div>
      <div class="menu-info">
        <div>
          <img src="../pics/clock-time-two-outline.svg" alt="fgh" class="icons">
        </div>
        <div>
          <p>Mon-Thurs: 11am-9pm</p>
          <p>Fri-Sun: 12pm-10pm</p>
        </div>
      </div>
    </div>
  `;
  restaurantInfo.classList.add('info');
  add(restaurantInfo);
}

