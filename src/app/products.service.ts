import { Injectable } from '@angular/core';
import { IProduct, products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProduct[] = products;

  constructor() { }

  getAll() {
    return this.products;
  }

  getOne(produtoId: number) {
    return this.products.find(product => product.id == produtoId)
  }
}
