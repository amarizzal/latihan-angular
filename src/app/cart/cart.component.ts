import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartServiceService } from "../cart-service.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = this.CartService.getProduct();
  checkOutForm = this.FormBuilder.group({
    name: "",
    address: ""
  });

  constructor(
    private CartService: CartServiceService,
    private FormBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.items = this.CartService.clearProduct();
    console.warn("Your order has been submitted", this.checkOutForm.value);
    this.checkOutForm.reset();
  }

  ngOnInit() {}
}
