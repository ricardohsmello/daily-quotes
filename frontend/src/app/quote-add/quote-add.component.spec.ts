import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteAddComponent } from './quote-add.component';

describe('QuoteAddComponent', () => {
  let component: QuoteAddComponent;
  let fixture: ComponentFixture<QuoteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
