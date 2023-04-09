import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pag/products/products.component';
import { TextComponent } from './pag/text/text.component';
import { FormComponent } from './pag/form/form.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './pag/edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TextComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
