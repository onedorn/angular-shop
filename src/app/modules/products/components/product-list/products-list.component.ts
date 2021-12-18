import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';

import { CartService } from '../../../../core/services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductsListComponent implements OnInit {
  productsList: Product[];

  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsList = this.productsService.getProducts();
  }

  onBuy(product: Product) {
    alert(`You bought ${product.name}`);
  }

  onAddToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
