import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTotalRegisterdFarmersReportComponent } from './daily-total-registerd-farmers-report.component';

describe('DailyTotalRegisterdFarmersReportComponent', () => {
  let component: DailyTotalRegisterdFarmersReportComponent;
  let fixture: ComponentFixture<DailyTotalRegisterdFarmersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTotalRegisterdFarmersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTotalRegisterdFarmersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
