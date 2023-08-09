import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";

@Injectable({
  providedIn: 'root'
})

export class ProductResolver implements Resolve<Product> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product | Observable<Product> | Promise<Product> {
    return this.productService.getProduct(route.paramMap.get('id'));
  }
}
