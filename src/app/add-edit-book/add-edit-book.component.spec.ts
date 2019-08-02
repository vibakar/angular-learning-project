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
import { HttpClientModule } from '@angular/common/http'; 
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
        HttpClientModule
      ],
      providers: [MatDatepickerModule, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
