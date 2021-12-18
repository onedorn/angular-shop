import { IProduct } from './product.interface';

export class Product implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: string,
    public isAvailable: boolean,
    public quantity: number = 0
  ) {}
}
