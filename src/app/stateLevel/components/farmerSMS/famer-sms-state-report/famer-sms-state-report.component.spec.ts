import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamerSmsStateReportComponent } from './famer-sms-state-report.component';

describe('FamerSmsStateReportComponent', () => {
  let component: FamerSmsStateReportComponent;
  let fixture: ComponentFixture<FamerSmsStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamerSmsStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamerSmsStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
