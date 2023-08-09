import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {map, ReplaySubject, takeUntil, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  template: `
    <app-products [products]="products"></app-products>
  `,
  styles: [
  ]
})
export class ProductListComponent implements OnInit, OnDestroy {

  public products: Product[] = [];

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchProductList();
  }

  private fetchProductList(): void {
    this.route.data.pipe(
      map(data => data['products']),
      tap(list => this.products = list),
      takeUntil(this.destroyed$),
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
