import './scss/styles.scss';

import { Products } from './components/models/products';
import { Checkout } from './components/models/checkout';
import { Buyer } from './components/models/buyer';

import { apiProducts } from './utils/data'
import { IProduct } from './types';

const products = new Products()

// products.allProducts = apiProducts.items

// // console.log(products.allProducts)
// console.log(products.getProductById("c101ab44-ed99-4a54-990d-47aa2bb4e7d9"))

// const productToDelete: IProduct = {
//   "id": "c101ab44-ed99-4a54-990d-47aa2bb4e7d9",
//   "description": "Лизните этот леденец, чтобы мгновенно запоминать и узнавать любой цветовой код CSS.",
//   "image": "/Shell.svg",
//   "title": "HEX-леденец",
//   "category": "другое",
//   "price": 1450
// }

// const checkout = new Checkout()

// checkout.productsInCheckout = apiProducts.items
// checkout.deleteProduct(productToDelete)
// checkout.addProduct(productToDelete)


// console.log(checkout.productsInCheckout)
// console.log(checkout.getSum())
// console.log(checkout.getQuantity())
// console.log(checkout.isProductInCheckout("c101ab44-ed99-4a54-990d-47aa2bb4e7d9"))