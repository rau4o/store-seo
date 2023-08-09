import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  template: `
    {{product | json}}
  `,
  styles: [
  ]
})
export class ProductDetailComponent implements OnInit {

  public product: Product = {
    id: null,
    description: '',
    image: '',
    name: '',
    price: 0
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.product.id = this.route.snapshot.paramMap.get('id');
  }

}
