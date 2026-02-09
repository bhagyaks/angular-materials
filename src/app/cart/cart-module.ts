import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartView } from './cart-view/cart-view';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CartView],
  imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule],
})
export class CartModule {}
