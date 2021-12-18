import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/product-list/products-list.component';
import { MaterialModule } from '../../core/material/material.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsModule { }
