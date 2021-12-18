import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Categories } from '../models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productList: Product[] = [
    new Product(
      1,
      'iPhone',
      'iPhone 13 Pro 256Gb Sierra Blue (MLVP3)',
      40999,
      Categories.smartphone,
      true
    ),
    new Product(
      2,
      'AirPods',
      'Apple AirPods Pro (MWP22)',
      6019,
      Categories.headphones,
      true
    ),
    new Product(3,
      'MacBook',
      'MacBook Pro M1 Pro 14 (MKGP3)',
      72859,
      Categories.laptop,
      true
    ),
    new Product(
      4,
      'AppleWatch',
      'Apple WATCH Series 7 41mm Starlight Aluminum Case With Starlight Sport Band (MKMY3)',
      15149,
      Categories.smartwatch,
      true
    ),
    new Product(
      5,
      'iPad',
      'iPad Pro 11 Wi-Fi 128GB Space Gray (MHQR3)',
      24389,
      Categories.tablet,
      true
    ),
    new Product(
      6,
      'PlayStation',
      'Sony PlayStation 5 Digital Edition 825GB',
      25999,
      Categories.console,
      true
    ),
    new Product(
      7,
      'Samsung',
      'Samsung Galaxy M62 8/256GB Laser Blue (SM-M625F)',
      14169,
      Categories.smartphone,
      true
    ),
    new Product(
      8,
      'XIAOMI',
      'XIAOMI Mi 11 Lite 5G Mi 11 Lite',
      9429,
      Categories.smartphone,
      true
    ),
    new Product(
      9,
      'DJI',
      'DJI Mavic Mini 2 (CP.MA.00000312.01)',
      26000,
      Categories.quadcopter,
      false
    ),
    new Product(
      10,
      'HarmanKardon',
      'Harman/Kardon Onyx Studio 7 Blue (HKOS7BLUEP)',
      7999,
      Categories.acoustics,
      true
    ),
  ];

  getProducts(): Product[] {
    return this.productList;
  }
}
