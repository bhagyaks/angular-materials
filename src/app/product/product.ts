import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product as IProduct } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class Product {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/products';

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }
}
