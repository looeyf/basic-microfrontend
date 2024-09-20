import faker from 'faker';

const mount = (element) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  element.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const cartElement = document.querySelector('#dev-cart');

  if (cartElement) {
    mount(cartElement);
  }
}

// Using this exposed mount function to render products list whenever/wherever the container needs
// if not running this project in isolation
export { mount };

