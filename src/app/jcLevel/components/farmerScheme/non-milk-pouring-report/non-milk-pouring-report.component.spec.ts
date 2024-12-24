import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMilkPouringReportComponent } from './non-milk-pouring-report.component';

describe('NonMilkPouringReportComponent', () => {
  let component: NonMilkPouringReportComponent;
  let fixture: ComponentFixture<NonMilkPouringReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonMilkPouringReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMilkPouringReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
