import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamerSmsMentorReportComponent } from './famer-sms-mentor-report.component';

describe('FamerSmsMentorReportComponent', () => {
  let component: FamerSmsMentorReportComponent;
  let fixture: ComponentFixture<FamerSmsMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamerSmsMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamerSmsMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
