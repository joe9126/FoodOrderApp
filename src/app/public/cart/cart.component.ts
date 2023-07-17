import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { CartitemsService } from 'app/services/cartitems.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
   title: string;
   isHidden: boolean = false;
   dataSource: any;
   displayedColumns: any;
 constructor(app: AppComponent, private cartitemservice : CartitemsService){
   this.title = app.title;
   this.displayedColumns = ['Sr No','Image','Name','Description','Price','Quantity','Total','Action'];
 }

 ngOnInit(): void {
  this.dataSource =  this.getItems();
 }


 getItems(){
  return this.cartitemservice.getItems();
 }

 

}