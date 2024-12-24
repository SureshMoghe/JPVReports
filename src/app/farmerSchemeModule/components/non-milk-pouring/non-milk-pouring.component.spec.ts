import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMilkPouringComponent } from './non-milk-pouring.component';

describe('NonMilkPouringComponent', () => {
  let component: NonMilkPouringComponent;
  let fixture: ComponentFixture<NonMilkPouringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonMilkPouringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMilkPouringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
