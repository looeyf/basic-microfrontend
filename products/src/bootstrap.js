import faker from 'faker';

const mount = (element) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
  const productsElement = document.querySelector('#dev-products');
  if (productsElement) {
    mount(productsElement);
  }
}

// Using this exposed mount function to render products list whenever/wherever the container needs
// if not running this project in isolation
export { mount };
