import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTotalMilkPopuringFarmersReportComponent } from './daily-total-milk-popuring-farmers-report.component';

describe('DailyTotalMilkPopuringFarmersReportComponent', () => {
  let component: DailyTotalMilkPopuringFarmersReportComponent;
  let fixture: ComponentFixture<DailyTotalMilkPopuringFarmersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTotalMilkPopuringFarmersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTotalMilkPopuringFarmersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
