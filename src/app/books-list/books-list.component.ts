import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import Book from '../models/book';
import { BooksService } from '../service/books.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  columns: string[] = ['Title', 'Author', 'ISBN', 'Publication Date', 'Publisher', 'Price', 'Genre', 'Format', 'Edit', 'Delete'];
  dataSource: Book[] = [];
  availableFields: any[] = [{
    name: "Title",
    checked: true
  }, {
    name: "Author",
    checked: true
  },{
    name: "ISBN",
    checked: true
  },{
    name: "Publication Date",
    checked: true
  },{
    name: "Publisher",
    checked: true
  },{
    name: "Price",
    checked: true
  },{
    name: "Genre",
    checked: true
  },{
    name: "Format",
    checked: true
  }];
  filterValue:string = '';
  constructor(private booksService:BooksService, public dialog: MatDialog, public snackBar: MatSnackBar, public router: Router) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.booksService.getAllBooks().subscribe((data:Book[]) => {
      this.dataSource = data;
    });
  }

  customizeFields(field) {
    let index = this.columns.indexOf(field.name);
    if(index >= 0) {
      this.columns.splice(index, 1);
    } else {
      this.columns.splice((this.columns.length - 2),0,field.name);
    }
  }

  deleteBook(id, title) {
    this.booksService.deleteBook(id).subscribe(response => {
      this.showSnackBar(`"${title}" deleted successfully!`);
      this.getAllBooks();
    });
  }

  showSnackBar(message) {
    this.snackBar.open(message, 'Ok', {duration: 3000});
  }

  confirmDelete(id, title) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {title: title}
    });

    dialogRef.afterClosed().subscribe(response => {
      if(response == 'yes') {
        this.deleteBook(id, title);
      }
    }); 
  }

  addBook() {
    this.router.navigate(['/addBook']);
  }
}