import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamerSmsDetailReportComponent } from './famer-sms-detail-report.component';

describe('FamerSmsDetailReportComponent', () => {
  let component: FamerSmsDetailReportComponent;
  let fixture: ComponentFixture<FamerSmsDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamerSmsDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamerSmsDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
