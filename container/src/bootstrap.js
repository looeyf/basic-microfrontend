import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

const productsElement = document.querySelector('#product-list');
productsMount(productsElement);

const cartElement = document.querySelector('#my-cart');
cartMount(cartElement);