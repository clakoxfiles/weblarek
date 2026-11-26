import { IApi, IRequest, ISuccess, IProductList } from "../../types"

export class Communication {
  private api: IApi

  constructor(api: IApi) {
    this.api = api
  }

  getData(): Promise<IProductList> {
    return this.api.get('/product/')
  }

  postData(order: IRequest): Promise<ISuccess> {
    return this.api.post('/order/', order)
  }
}