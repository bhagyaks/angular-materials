import { Component, OnInit } from '@angular/core';
import { Product as ProductService } from '../product';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Cart as CartService } from '../../cart/cart';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products$: Observable<Product[]> | undefined;
  filteredProduct: Observable<Product[]> | undefined;
  sortOrder: string = '';
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackbar: MatSnackBar,
  ) {}
  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    this.filteredProduct = this.products$;
  }
  applyFilter($event: KeyboardEvent) {
    const searchTerm = ($event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProduct = this.products$?.pipe(
      map((products) =>
        products.filter((product) => product.name.toLowerCase().includes(searchTerm)),
      ),
    );
  }
  applySort(sortValue: string) {
    this.sortOrder = sortValue;
    this.filteredProduct = this.products$?.pipe(
      map((products) => {
        if (this.sortOrder === 'sortHighToLow') products.sort((a, b) => b.price - a.price);
        else if (this.sortOrder === 'sortLowToHigh') products.sort((a, b) => a.price - b.price);
        return products;
      }),
    );
  }
  addToCart(product: Product) {
    return this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackbar.open('Product added to cart', '', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
    });
  }
}
