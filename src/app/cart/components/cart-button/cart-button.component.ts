import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CartListComponent } from '../cart-list/cart-list.component';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.less']
})
export class CartButtonComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private matBottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {}

  getProductsCount(): number {
    return this.cartService.getCartList().length;
  }

  openCartModal(): void {
    this.matBottomSheet.open(CartListComponent);
  }

}
