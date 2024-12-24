import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPromotersAddedComponent } from './total-promoters-added.component';

describe('TotalPromotersAddedComponent', () => {
  let component: TotalPromotersAddedComponent;
  let fixture: ComponentFixture<TotalPromotersAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPromotersAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPromotersAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
