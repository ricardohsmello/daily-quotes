import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteListComponent } from './quote-list.component';

describe('QuoteListComponent', () => {
  let component: QuoteListComponent;
  let fixture: ComponentFixture<QuoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
