import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API_URL = 'https://fakestoreapi.com';
  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(
      `${this.API_URL}/products`
    );
  }

  public getProduct(productID: string): Observable<Product>{
      return this.httpClient.get<Product>(
        `${this.API_URL}/product/${productID}`
      );
  }
}
