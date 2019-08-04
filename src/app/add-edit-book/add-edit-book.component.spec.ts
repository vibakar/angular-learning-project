import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { AddEditBookComponent } from './add-edit-book.component';

describe('AddEditBook Component', () => {
  let component: AddEditBookComponent;
  let fixture: ComponentFixture<AddEditBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditBookComponent ],
      imports: [ 
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule, 
        MatSelectModule, 
        MatDatepickerModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatInputModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [MatDatepickerModule, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.newBook = {
      "title": "The Jungle Book",
      "author": "Rudyard Kipling",
      "isbn": "9788379030651",
      "publicationDate": "1/11/1985",
      "publisher": "Macmillan Publishers",
      "price": "195",
      "genre": "Adventure",
      "format": "Ebook"
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title for new book', () => {
    expect(component.newBook.title).toBe('The Jungle Book');
  });

  it('should have genres more than 2', () => {
    expect(component.genres.length).toBeGreaterThan(2);
  });

  it('should have formats more than 2', () => {
    expect(component.formats.length).toBeGreaterThan(2);
  });
});
