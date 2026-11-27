import './scss/styles.scss';

const API_URL = import.meta.env.VITE_API_ORIGIN

import { Products } from './components/models/Products';
import { Checkout } from './components/models/Checkout';
import { Buyer } from './components/models/Buyer';

import { apiProducts } from './utils/data'
import { Api } from './components/base/Api';
import { Communication } from './components/API/Communication';
import { IOrderRequest } from './types';

// Product
console.log('Товары')

const products = new Products()
products.allProducts = apiProducts.items

console.log('Массив товаров:', products.allProducts)
console.log('Продукт по ID:', products.getProductById("c101ab44-ed99-4a54-990d-47aa2bb4e7d9"))

products.inspectedProduct = apiProducts.items[0]
console.log('Выбранный продукт:', products.inspectedProduct)

// Checkout
console.log('Корзина')

const checkout = new Checkout()

checkout.addProduct(apiProducts.items[1])
checkout.addProduct(apiProducts.items[2])
checkout.addProduct(apiProducts.items[3])
console.log('Массив продуктов в корзине:', checkout.productsInCheckout)

checkout.deleteProduct(apiProducts.items[3])
console.log('После удаления товара:', checkout.productsInCheckout)

console.log('Сумма:', checkout.getSum())
console.log('Количество товаров:', checkout.getQuantity())

console.log('Есть ли продукт в корзине (по ID: asd):', checkout.isProductInCheckout('asd'))
console.log('Есть ли продукт в корзине (по ID: c101ab44-ed99-4a54-990d-47aa2bb4e7d9):', checkout.isProductInCheckout('c101ab44-ed99-4a54-990d-47aa2bb4e7d9'))

// Buyer
console.log('Покупатель')

const buyer = new Buyer()

buyer.setBuyerInfo( { payment: 'cash', address: '123' } )
buyer.cleanData()
buyer.setBuyerInfo( { payment: 'card', address: '999' } )

console.log('Информация о покупателе:', buyer.buyerInfo)
console.log('Валидация:', buyer.validateData())

// API
const api = new Api(API_URL)
const communication = new Communication(api)

const order: IOrderRequest = {
  payment: "card",
  email: "123",
  phone: "79992198423",
  address: "123",
  total: 2200,
  items: [
    "854cef69-976d-4c2a-a18c-2aa45046c390",
    "c101ab44-ed99-4a54-990d-47aa2bb4e7d9"
  ]
}

console.log('GET', await communication.getData())

communication.getData()
  .then(responce => {
    products.allProducts = responce.items
    console.log('API Product List', products.allProducts)
  })
  .catch(error => {
    console.error('Ошибка при получении товаров с сервера:', error)
  })


try {
  const result = await communication.postData(order)
  console.log('Заказ создан и отправлен на сервер:', result)
} catch(error) {
  console.error('Ошибка при отправке созданного заказа на сервер', error)
}
