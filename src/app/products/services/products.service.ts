import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Categories } from '../models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productList: Product[] = [
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
    {
      id: 3,
      name: 'MacBook',
      description: 'MacBook Pro M1 Pro 14 (MKGP3)',
      price: 72859,
      category: Categories.laptop,
      isAvailable: true
    },
    {
      id: 4,
      name: 'AppleWatch',
      description: 'Apple WATCH Series 7 41mm Starlight Aluminum Case With Starlight Sport Band (MKMY3)',
      price: 15149,
      category: Categories.smartwatch,
      isAvailable: true
    },
    {
      id: 5,
      name: 'iPad',
      description: 'iPad Pro 11 Wi-Fi 128GB Space Gray (MHQR3)',
      price: 24389,
      category: Categories.tablet,
      isAvailable: true
    },
    {
      id: 6,
      name: 'PlayStation',
      description: 'Sony PlayStation 5 Digital Edition 825GB',
      price: 25999,
      category: Categories.console,
      isAvailable: true
    },
    {
      id: 7,
      name: 'Samsung',
      description: 'Samsung Galaxy M62 8/256GB Laser Blue (SM-M625F)',
      price: 14169,
      category: Categories.smartphone,
      isAvailable: true
    },
    {
      id: 8,
      name: 'XIAOMI',
      description: 'XIAOMI Mi 11 Lite 5G Mi 11 Lite',
      price: 9429,
      category: Categories.smartphone,
      isAvailable: true
    },
    {
      id: 9,
      name: 'DJI',
      description: 'DJI Mavic Mini 2 (CP.MA.00000312.01)',
      price: 26000,
      category: Categories.quadcopter,
      isAvailable: false
    },
    {
      id: 10,
      name: 'HarmanKardon',
      description: 'Harman/Kardon Onyx Studio 7 Blue (HKOS7BLUEP)',
      price: 7999,
      category: Categories.acoustics,
      isAvailable: true
    },
  ];

  getProducts(): Product[] {
    return this.productList;
  }
}
