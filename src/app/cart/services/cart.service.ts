import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product';
import { Categories } from '../../products/models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList: Product[] = [
    {
      id: 1,
      name: 'iPhone',
      description: 'iPhone 13 Pro 256Gb Sierra Blue (MLVP3)',
      price: 40999,
      category: Categories.smartphone,
      isAvailable: true
    },
    {
      id: 2,
      name: 'AirPods',
      description: 'Apple AirPods Pro (MWP22)',
      price: 6019,
      category: Categories.headphones,
      isAvailable: true
    },
  ];

  constructor() { }

  getCartList(): Product[] {
    return this.cartList;
  }

  isCartEmpty(): boolean {
    return !!this.cartList.length;
  }

  addProduct(product: Product): void {
    // мутация
    this.cartList.push(product);
  }

  getCartTotal(): number {
    let total = 0;

    this.cartList.forEach(product => total += product.price);

    return total;
  }

  deleteProduct(product: Product): void {
    const index = this.cartList.indexOf(product);
    // мутация
    this.cartList.splice(index, 1);
  }

  cleanCart(): void {
    // НЕ мутация
    // this.cartList = [];
    // мутация
    this.cartList.length = 0;
  }
}
