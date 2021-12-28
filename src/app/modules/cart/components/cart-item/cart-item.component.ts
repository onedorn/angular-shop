import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../../products/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() cartProduct: Product;
  @Output() deleteProduct = new EventEmitter<Product>();
  @Output() increaseQuantity = new EventEmitter<number>();
  @Output() decreaseQuantity = new EventEmitter<number>();

  onDeleteProduct(): void {
    this.deleteProduct.emit(this.cartProduct);
  }

  onIncreaseQuantity(id: number): void {
    this.increaseQuantity.emit(id);
  }

  onDecreaseQuantity(id: number): void {
    this.decreaseQuantity.emit(id);
  }
}
