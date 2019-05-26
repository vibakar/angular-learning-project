import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../service/books.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {
  maxDate = new Date();
  genres: string[] = ["Action","Adventure", "Drama", "Fantasy", "Horror", "Humor", "Romance"];
  formats: string[] = ["Format1", "Format2", "Format3"];
  newBook = {
    "title": "",
    "author": "",
    "isbn": null,
    "publicationDate": "",
    "publisher": "",
    "price": "",
    "genre": "",
    "format": ""
  };

  constructor(public router:Router, private bookService: BooksService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  cancel() {
  	this.router.navigate(['/']);
  }

  addBook() {
    let date = new Date(this.newBook.publicationDate);
    this.newBook.publicationDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  	this.bookService.addBook(this.newBook).subscribe(data => {
      this.router.navigate(['/']);
      this.showSnackBar("New Book Added Successfully!");
    });
  }

  showSnackBar(message) {
    this.snackBar.open(message, 'Ok', {duration: 3000});
  }
}
