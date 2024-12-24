import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMilkPouringMandalComponent } from './non-milk-pouring-mandal.component';

describe('NonMilkPouringMandalComponent', () => {
  let component: NonMilkPouringMandalComponent;
  let fixture: ComponentFixture<NonMilkPouringMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonMilkPouringMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMilkPouringMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
