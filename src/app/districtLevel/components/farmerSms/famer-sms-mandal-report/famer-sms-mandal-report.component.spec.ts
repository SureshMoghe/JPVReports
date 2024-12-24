import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamerSmsMandalReportComponent } from './famer-sms-mandal-report.component';

describe('FamerSmsMandalReportComponent', () => {
  let component: FamerSmsMandalReportComponent;
  let fixture: ComponentFixture<FamerSmsMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamerSmsMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamerSmsMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
