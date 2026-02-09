import { Component, OnInit } from '@angular/core';
import { Cart as CartService } from '../cart';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cart-view',
  standalone: false,
  templateUrl: './cart-view.html',
  styleUrl: './cart-view.css',
})
export class CartView implements OnInit {
  checkout() {
    return this.cartItems$?.subscribe((items) => this.cartService.checkout(items).subscribe());
  }
  clearCart() {
    return this.cartService.clearCart().subscribe();
  }
  cartItems$: Observable<Product[]> | undefined;
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartItems$ = this.cartService.getCartItems();
    this.getTotalPrice();
  }
  getTotalPrice() {
    let total = 0;
    this.cartItems$?.subscribe((items) => {
      for (let item of items) {
        total += item.price;
      }
      this.totalPrice = total;
    });
  }
}
