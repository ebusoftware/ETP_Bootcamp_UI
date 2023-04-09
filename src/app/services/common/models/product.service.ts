import { Injectable } from '@angular/core';

import { HttpClientService } from '../http-client.service';
import { ListProduct } from 'src/app/contracts/product/list-product';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }

  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalProductCount: number; products: ListProduct[]}> {
    const promiseData: Promise<{ totalProductCount: number; products: ListProduct[]}> = this.httpClientService.get<{ totalProductCount: number; products: ListProduct[]}>({
      controller: "product",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }
}
