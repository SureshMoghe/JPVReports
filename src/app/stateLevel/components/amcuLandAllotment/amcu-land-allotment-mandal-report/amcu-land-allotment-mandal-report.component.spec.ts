import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuLandAllotmentMandalReportComponent } from './amcu-land-allotment-mandal-report.component';

describe('AmcuLandAllotmentMandalReportComponent', () => {
  let component: AmcuLandAllotmentMandalReportComponent;
  let fixture: ComponentFixture<AmcuLandAllotmentMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuLandAllotmentMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuLandAllotmentMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
