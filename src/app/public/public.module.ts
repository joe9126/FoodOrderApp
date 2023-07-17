import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'app/app-routing.module';
import { PublicComponent } from './public.component';
import { ProductsService } from 'app/services/products/products.service';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ValueArrayPipe } from 'app/value-array-pipe'; 
@NgModule({
  declarations: [
    PublicComponent,
    ProductsComponent,
    CartComponent,
    ValueArrayPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  providers:[
    ProductsService
  ]
})
export class PublicModule { }
