const content = document.querySelector('#content');

export function displayMenu() {
  content.innerHTML = '';
  content.style = 'padding-top: 20px;'
  document.body.style = 'background: none; background-color: beige;';

  let header = document.createElement('h1');
  header.textContent = 'MENU';
  header.style = 'color: black;'
  content.appendChild(header);

  let menu = document.createElement('div');
  menu.classList.add('menu-container');
  content.appendChild(menu);

  function createMenuItem(name, price, imgs) {
    let div = document.createElement('div');
    div.textContent = `${name}: $${price}`;
    div.classList.add('menu-items');
    let img = document.createElement('img');
    img.src = `../pics/${imgs}`;
    img.classList.add('pics');
    div.appendChild(img);
    menu.appendChild(div);
  }

  createMenuItem('pepperoni pizza', '6.99', 'nik-owens-40OJLYVWeeM-unsplash.jpg');
  createMenuItem('cheese pizza', '5.99', 'carissa-gan-_0JpjeqtSyg-unsplash.jpg');
  createMenuItem('meat lovers pizza', '7.99', 'the-nix-company-ljvm17bH-e0-unsplash.jpg');
  createMenuItem('veggie pizza', '8.99', 'jonas-kakaroto-zlKdLdMREtE-unsplash.jpg');  
}