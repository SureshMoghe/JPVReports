import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuPerformanceDistrictReportComponent } from './amcu-performance-district-report.component';

describe('AmcuPerformanceDistrictReportComponent', () => {
  let component: AmcuPerformanceDistrictReportComponent;
  let fixture: ComponentFixture<AmcuPerformanceDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuPerformanceDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuPerformanceDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
