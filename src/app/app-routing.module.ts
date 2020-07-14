import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book/book.component';
import {NgModule} from '@angular/core';
import {FormComponent} from './form/form.component';
import {BookCardComponent} from './book-card/book-card.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'form/:id',
    component: FormComponent
  },
  {
    path: 'card/:id',
    component: BookCardComponent
  }
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
