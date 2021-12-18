import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCard = new EventEmitter<Product>();
  @Output() buy = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void { }

  onBuy(): void {
    this.buy.emit(this.product);
  }

  onAddToCart(): void {
    this.addToCard.emit(this.product);
  }
}
