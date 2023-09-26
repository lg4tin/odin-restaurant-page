const content = document.querySelector('#content');

export function displayMenu() {
  content.innerHTML = '';
  document.body.style = 'background: none; background-color: beige;';

  function createMenuItem(name, price, imgs) {
    let div = document.createElement('div');
    div.textContent = `${name}, ${price}, ${imgs}`;
    let img = document.createElement('img');
    img.src = '../nik-owens-40OJLYVWeeM-unsplash.jpg';
    img.classList.add('pics');
    div.appendChild(img);
    content.appendChild(div);

    
  }

  

  createMenuItem('pepperoni pizza', '5.99', 'hi')
  createMenuItem('cheese pizza', '5.99', 'hi');
  createMenuItem('meat lovers pizza', '7.99', 'hi')
  
}