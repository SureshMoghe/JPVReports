import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMilkPouringFarmersReportComponent } from './non-milk-pouring-farmers-report.component';

describe('NonMilkPouringFarmersReportComponent', () => {
  let component: NonMilkPouringFarmersReportComponent;
  let fixture: ComponentFixture<NonMilkPouringFarmersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonMilkPouringFarmersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMilkPouringFarmersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
