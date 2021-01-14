import { Injectable } from "@angular/core";

@Injectable()
export class CartServiceService {
  items = [];

  addProduct(product) {
    this.items.push;
  }

  getProduct() {
    return this.items;
  }

  clearProduct() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
