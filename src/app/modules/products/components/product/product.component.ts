import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() addToCard = new EventEmitter<Product>();
  @Output() buy = new EventEmitter<Product>();

  onBuy(): void {
    this.buy.emit(this.product);
  }

  onAddToCart(): void {
    this.addToCard.emit(this.product);
  }
}
