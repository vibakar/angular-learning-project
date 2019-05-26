import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  configUrl:string = "http://localhost:3000/books";
  constructor(private http:HttpClient) { }

  getAllBooks() {
  	return this.http.get(this.configUrl);
  }

  getBookDetail(id) {
  	return this.http.get(`${this.configUrl}/${id}`);
  }

  deleteBook(id) {
  	return this.http.delete(`${this.configUrl}/${id}`);
  }
}
