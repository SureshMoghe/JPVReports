import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamerSmsRbkReportComponent } from './famer-sms-rbk-report.component';

describe('FamerSmsRbkReportComponent', () => {
  let component: FamerSmsRbkReportComponent;
  let fixture: ComponentFixture<FamerSmsRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamerSmsRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamerSmsRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
