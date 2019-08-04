import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookDetailComponent } from './book-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('BookDetail Component', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailComponent ],
      imports: [ 
        RouterTestingModule,
        HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.bookDetail = {
      "id": 1,
      "title": "The Jungle Book",
      "author": "Rudyard Kipling",
      "isbn": "9788379030651",
      "publicationDate": "1/11/1985",
      "publisher": "Macmillan Publishers",
      "price": 195,
      "genre": "Adventure",
      "format": "Ebook"
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have id for the book', () => {
    expect(component.bookDetail.id).toBeDefined();
  });
});
