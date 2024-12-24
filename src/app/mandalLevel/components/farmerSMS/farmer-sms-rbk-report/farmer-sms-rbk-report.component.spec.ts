import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSmsRbkReportComponent } from './farmer-sms-rbk-report.component';

describe('FarmerSmsRbkReportComponent', () => {
  let component: FarmerSmsRbkReportComponent;
  let fixture: ComponentFixture<FarmerSmsRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSmsRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSmsRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
