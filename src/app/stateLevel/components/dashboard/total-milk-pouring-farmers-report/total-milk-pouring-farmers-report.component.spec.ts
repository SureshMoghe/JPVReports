import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMilkPouringFarmersReportComponent } from './total-milk-pouring-farmers-report.component';

describe('TotalMilkPouringFarmersReportComponent', () => {
  let component: TotalMilkPouringFarmersReportComponent;
  let fixture: ComponentFixture<TotalMilkPouringFarmersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalMilkPouringFarmersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMilkPouringFarmersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
