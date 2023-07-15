import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'app/app-routing.module';
import { PublicComponent } from './public.component';
import { ProductsService } from 'app/services/products/products.service';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    PublicComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers:[
    ProductsService
  ]
})
export class PublicModule { }
