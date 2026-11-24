import { IProduct } from '../../types/index'

export class Products {
  private _allProducts: IProduct[] = []
  private _inspectedProduct: IProduct | null = null

  set allProducts(productsArray: IProduct[]) {
    this._allProducts = productsArray
  }

  get allProducts() {
    return this._allProducts
  }

  set inspectedProduct(product: IProduct | null) {
    this._inspectedProduct = product
  }

  get inspectedProduct() {
    return this._inspectedProduct
  }

  getProductById(id: string): IProduct | null {
    const product = this.allProducts.find(item => item.id === id) ?? null
    return product
  }
}