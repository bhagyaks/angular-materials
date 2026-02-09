import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class Cart {
  private apiCartUrl = environment.apiUrl + '/cart';
  private apiCheckoutUrl = environment.apiUrl + '/checkout';

  private http = inject(HttpClient);
  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiCartUrl, product);
  }
  getCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiCartUrl);
  }
  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiCartUrl);
  }
  checkout(products: Product[]): Observable<void> {
    return this.http.post<void>(this.apiCheckoutUrl, products);
  }
}
