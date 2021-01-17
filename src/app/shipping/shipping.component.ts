import { Component, OnInit } from "@angular/core";
import { CartServiceService } from "../cart-service.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  shippingCosts = this.http.getShippingPrices();

  constructor(private http: CartServiceService) {}

  ngOnInit() {}
}
