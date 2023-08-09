import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-products',
  template: `
    <ng-container *ngFor="let product of products">
      <div class="col-md-6 col-lg-4 mb-3">
        <app-product [product]="product" [details]="false"></app-product>
      </div>
    </ng-container>
  `,
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  @Input() public products: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
