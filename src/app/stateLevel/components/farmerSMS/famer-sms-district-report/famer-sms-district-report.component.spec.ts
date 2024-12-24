import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamerSmsDistrictReportComponent } from './famer-sms-district-report.component';

describe('FamerSmsDistrictReportComponent', () => {
  let component: FamerSmsDistrictReportComponent;
  let fixture: ComponentFixture<FamerSmsDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamerSmsDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamerSmsDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
