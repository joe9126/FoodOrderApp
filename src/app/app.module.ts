import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PublicModule } from './public/public.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list';
import {NgIf} from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    NgIf,
    HttpClientModule,
    MatListModule,
    MatExpansionModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
