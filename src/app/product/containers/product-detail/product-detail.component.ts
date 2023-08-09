import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {map, ReplaySubject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-product-detail',
  template: `
    <app-product [product]="product" [details]="true"></app-product>
  `,
  styles: [
  ]
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  public product: Product = {
    id: null,
    description: '',
    image: '',
    name: '',
    price: 0
  };

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchProductById();
  }

  private fetchProductById(): void {
    this.route.data
      .pipe(
        map(data => data['product']),
        tap(res => this.product = res),
        takeUntil(this.destroyed$),
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
