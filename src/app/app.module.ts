import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BookCardComponent } from './book-card/book-card.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    FormComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
