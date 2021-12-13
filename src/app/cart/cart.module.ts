import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from "./components/cart-list/cart-list.component";
import { CartButtonComponent } from "./components/cart-button/cart-button.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    CartListComponent,
    CartButtonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  // https://next.angular.io/api/core/Component#entryComponents
  // entryComponents: [CartListComponent],
  exports: [CartButtonComponent],
})
export class CartModule { }
