import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products : any;
  isHidden = false;
  constructor(private productsService : ProductsService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
    this.productsService.getProducts().subscribe(
      (results:any) => this.products = results
    );
  }

 
}
