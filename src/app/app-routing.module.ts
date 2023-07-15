import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './public/products/products.component';
import { PublicComponent } from './public/public.component';
import { CartComponent } from './public/cart/cart.component';

const routes: Routes = [
  {path: '',component:PublicComponent,
      children:[
        {path:'products',component:ProductsComponent},
        {path:'cart',component:CartComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
