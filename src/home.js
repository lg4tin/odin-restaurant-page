const content = document.querySelector('#content');

export function pageLoad() {
  function add(item) {
    content.appendChild(item);
  }

  content.innerHTML = '';

  document.body.style = 'background: url("../nik-owens-40OJLYVWeeM-unsplash.jpg");'

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
      <div class="menu-info">
        <div>
          <p>sdcdscdsc</p>
        </div>
        <div>
          <p>555 Main St</p>
          <p>Tampa, FL 33614</p>
        </div>
      </div>
      <div class="menu-info">
        <div>
          <p>sdcdscdsc</p>
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
