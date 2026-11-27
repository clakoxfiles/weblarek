import { IBuyer, ValidationErrors } from "../../types"

export class Buyer {
  private _buyerInfo: IBuyer = this.getCleanTemplate()

  private getCleanTemplate(): IBuyer {
    return {
      payment: '',
      address: '',
      email: '',
      phone: '',
    }
  }

  setBuyerInfo(fieldsToChange: Partial<IBuyer>): void {
    this._buyerInfo = { ...this._buyerInfo, ...fieldsToChange }
  }

  get buyerInfo(): IBuyer {
    return this._buyerInfo
  }

  cleanData(): void {
    this._buyerInfo = this.getCleanTemplate()
  }

  validateData(): ValidationErrors {
    const errors: ValidationErrors = {}

    if (this._buyerInfo.payment === '') errors.payment = 'Не выбран тип оплаты'
    if (this._buyerInfo.phone.trim() === '') errors.phone = 'Укажите номер телефона'
    if (this._buyerInfo.address.trim() === '') errors.address = 'Укажите адрес'
    if (this._buyerInfo.email.trim() === '') errors.email = 'Укажите email'
    
    return errors
  }
}