import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { LocalComponent } from './local/local.component';
import { ToggleComponentComponent } from './toggle-component/toggle-component.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormsComponent,
    HomeComponent,
    DatabaseComponent,
    LocalComponent,
    ToggleComponentComponent,
   
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    MatTreeModule,
    MatIconModule,
    FormsModule,
    MatSlideToggleModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
