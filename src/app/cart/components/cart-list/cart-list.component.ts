import { Component, OnInit } from '@angular/core';
import { Product } from '../../../products/models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less']
})
export class CartListComponent implements OnInit {

  cartList: Product[];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {}

  getProductsFromCart(): Product[] {
    return this.cartService.getCartList();
  }

  getCartTotal(): number {
    return this.cartService.getCartTotal();
  }

  deleteProduct(product: Product): void {
    this.cartService.deleteProduct(product);
  }

  isCartEmpty(): boolean {
    return this.cartService.isCartEmpty();
  }

  order(): void {
    alert(`Your order price is: ${this.getCartTotal()} uah`);
    this.cartService.cleanCart();
  }

}
