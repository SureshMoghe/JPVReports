import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSmsMandalReportComponent } from './farmer-sms-mandal-report.component';

describe('FarmerSmsMandalReportComponent', () => {
  let component: FarmerSmsMandalReportComponent;
  let fixture: ComponentFixture<FarmerSmsMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSmsMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSmsMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
