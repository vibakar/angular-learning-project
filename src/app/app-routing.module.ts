import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [{
	path: '',
	component: BooksListComponent
}, {
	path: 'book/:id',
	component: BookDetailComponent
},{
	path: '**',
	redirectTo: '/',
	pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
