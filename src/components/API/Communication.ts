import { IApi, IOrderRequest, IOrderSuccess, IProductList } from "../../types"

export class Communication {
  private api: IApi

  constructor(api: IApi) {
    this.api = api
  }

  getData(): Promise<IProductList> {
    return this.api.get('/product/')
  }

  postData(order: IOrderRequest): Promise<IOrderSuccess> {
    return this.api.post('/order/', order)
  }
}