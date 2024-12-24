import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSmsDetailReportComponent } from './farmer-sms-detail-report.component';

describe('FarmerSmsDetailReportComponent', () => {
  let component: FarmerSmsDetailReportComponent;
  let fixture: ComponentFixture<FarmerSmsDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSmsDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSmsDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
