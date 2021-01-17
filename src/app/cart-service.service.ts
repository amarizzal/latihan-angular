import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class CartServiceService {
  items = [];

  addProduct(product) {
    this.items.push(product);
    window.alert("Your product has been added to the cart!");
  }

  getProduct() {
    return this.items;
  }

  clearProduct() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }

  constructor(private http: HttpClient) {}
}
