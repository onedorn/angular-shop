import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CartModalComponent } from '../../../modules/cart/components/cart-modal/cart-modal.component';

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
    this.matBottomSheet.open(CartModalComponent);
  }
}
