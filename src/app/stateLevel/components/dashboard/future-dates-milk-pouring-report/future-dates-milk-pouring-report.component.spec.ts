import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureDatesMilkPouringReportComponent } from './future-dates-milk-pouring-report.component';

describe('FutureDatesMilkPouringReportComponent', () => {
  let component: FutureDatesMilkPouringReportComponent;
  let fixture: ComponentFixture<FutureDatesMilkPouringReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureDatesMilkPouringReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureDatesMilkPouringReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
