import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ProductList],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class ProductModule {}
