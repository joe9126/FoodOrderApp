import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './public/products/products.component';
import { PublicComponent } from './public/public.component';
import { CartComponent } from './public/cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo:'shop', pathMatch:'full'},
  {path: '',component:PublicComponent,
      children:[
        {path:'shop',component:ProductsComponent},
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
