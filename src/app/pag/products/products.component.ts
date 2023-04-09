import { Service } from 'src/app/shared/services';


import { Component, Input, inject, OnInit } from '@angular/core';
import { Product } from "./../../shared/pag.models";
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  http = inject(HttpClient);
  products: Product[] = [];

  ngOnInit() {
    this.http.get<Product[]>('http://localhost:3000/products')

      .subscribe(data => this.products = data);

  }
constructor(private service: Service){

}

delete(id:number){

  this.service.deleteProduct(id).subscribe()
  confirm("¿Quieres elimar el producto?")
location.reload()
}




  @Input() product!: Product;
}
