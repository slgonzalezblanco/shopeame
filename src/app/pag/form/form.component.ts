import { Service } from './../../shared/services';
import { Component } from '@angular/core';
import { Product } from "./../../shared/pag.models";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
 

producto: Product = {
      id:0,
      name:"",
      price: 0,
      description: "",
      stars: 0,
      image: "",
    };
  constructor(private service:Service){

  }
    post(){
   
      
this.service.createProduct(this.producto).subscribe()
confirm("Porducto modificado")
location.reload()
    }
}
