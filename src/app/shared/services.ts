import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from "../shared/pag.models";
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
  })

  export class Service {
    
    private url = 'http://localhost:3000/products';
    constructor(private http: HttpClient) {}

    
    getProduct(): Observable<Product> {
        return this.http.get<Product>('http://localhost:3000/products');
      }
    
      createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.url, product);
      }
    
      updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>('http://localhost:3000/products/'+product.id,product);
      }
    
      deleteProduct(id: number): Observable<Product> {

        return this.http.delete<Product>('http://localhost:3000/products/'+id);
      }
      getProductById(id: number): Observable<Product> {
        return this.http.get<Product>('http://localhost:3000/products/'+id);
      }
    
    }