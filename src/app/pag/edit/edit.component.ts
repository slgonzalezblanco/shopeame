import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/pag.models';
import { Service } from 'src/app/shared/services';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{
  producto: Product = {
    id:0,
    name:"",
    price: 0,
    description: "",
    stars: 0,
    image: "",
  };


  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
    const id = params['id'];
    this.service.getProductById(id).subscribe((res:any)=>{

      this.producto=res;
    })
  
  });
        

  }
constructor(private service:Service, private route:ActivatedRoute){

}

put(){
  
  
  this.service.updateProduct(this.producto).subscribe()
}
}
