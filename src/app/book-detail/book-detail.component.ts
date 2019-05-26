import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from '../service/books.service';
import Book from '../models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookDetail:Book;
  constructor(private router: Router, private route: ActivatedRoute, private booksService:BooksService) { }

  ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      this.getBookDetail(id);
  }

  getBookDetail(id) {
  	this.booksService.getBookDetail(id).subscribe((data:Book) => {
      this.bookDetail = data
    });
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}