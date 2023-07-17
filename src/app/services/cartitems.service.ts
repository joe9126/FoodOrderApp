import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cartitem } from 'app/models/cartitem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartitemsService {

  constructor(private httpclient : HttpClient) { }

getItems(){
  return this.httpclient.get<Cartitem>('assets/json/cartitems.json');
}
}
