import { Component, Input, inject, OnInit } from '@angular/core';
import { Product } from "./../../shared/pag.models";
import {HttpClient} from '@angular/common/http'



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit{
  http= inject (HttpClient);
  products: Product [] = [];

  ngOnInit() {
    this.http.get<Product[]>('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products')
    
      .subscribe(data => this.products = data);
    
    }

@Input () product!: Product;
}
