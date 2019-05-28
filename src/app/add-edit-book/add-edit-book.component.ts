import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { BooksService } from '../service/books.service';
import Book from '../models/book';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {
  maxDate = new Date();
  genres: string[] = ["Action","Adventure", "Drama", "Fiction", "Fantasy", "Horror", "Humor", "Romance"];
  formats: string[] = ["Ebook", "Hard Cover", "Paper Back", "Audio Book"];
  newBook = {
    "title": "",
    "author": "",
    "isbn": null,
    "publicationDate": "",
    "publisher": "",
    "price": null,
    "genre": "",
    "format": ""
  };
  bookId:string;
  selectedPublicationDate;

  constructor(private router:Router, private booksService: BooksService, private snackBar: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    if(this.bookId) {
      this.getBookDetail();
    }
  }

  cancel() {
  	this.router.navigate(['/']);
  }

  getBookDetail() {
    this.booksService.getBookDetail(this.bookId).subscribe((data:Book) => {
      let date = data.publicationDate.split("/");
      let newFormat = '"' + date[1] + '/' + date[0] + '/' + date[2] + '"';
      this.selectedPublicationDate = new Date(newFormat);
      this.newBook = data;
    });
  }

  addBook() {
    let date = new Date(this.selectedPublicationDate);
    this.newBook.publicationDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  	this.booksService.addBook(this.newBook).subscribe(data => {
      this.router.navigate(['/']);
      this.showSnackBar(`"${this.newBook.title}" Added Successfully!`);
    });
  }

  editBook() {
    let date = new Date(this.selectedPublicationDate);
    this.newBook.publicationDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    this.booksService.editBook(this.newBook).subscribe(data => {
      this.router.navigate(['/']);
      this.showSnackBar(`"${this.newBook.title}" Updated Successfully!`);
    });
  }

  showSnackBar(message) {
    this.snackBar.open(message, 'Ok', {duration: 3000});
  }
}
