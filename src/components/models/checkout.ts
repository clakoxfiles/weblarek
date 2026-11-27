import { IProduct } from "../../types";

export class Checkout {
  private _productsInCheckout: IProduct[] = []

  get productsInCheckout(): IProduct[] {
    return this._productsInCheckout
  }

  addProduct (product: IProduct): void {
    this._productsInCheckout.push(product)
  }

  deleteProduct (product: IProduct): void {
    this._productsInCheckout = this._productsInCheckout.filter(item => item.id !== product.id)
  }

  cleanAll(): void {
    this._productsInCheckout = []
  }

  getSum(): number {
    return this._productsInCheckout.reduce((acc, item) => {
      if (item.price === null) return acc + 0
      return acc + item.price
    }, 0)
  }

  getQuantity(): number {
    return this._productsInCheckout.length
  }

  isProductInCheckout(id: string): boolean {
    return this._productsInCheckout.some(item => item.id === id)
  }
}