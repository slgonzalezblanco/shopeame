import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TextComponent} from './pag/text/text.component'
import {ProductsComponent} from './pag/products/products.component'
import {FormComponent} from './pag/form/form.component'
import { EditComponent } from './pag/edit/edit.component';

const routes: Routes = [
  {
    path: "text", component: TextComponent
  },
  {
    path: "products", component: ProductsComponent
  },
  {
    path: "form", component: FormComponent
  },{
    path: "products/:id", component: EditComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
