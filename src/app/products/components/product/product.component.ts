import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;

  // не стоит тут внедрять зависимость
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  onBuy(): void {
    alert(`You bought ${this.product.name}`);
  }

  onAddToCart(): void {
    this.cartService.addProduct(this.product);
  }
}
