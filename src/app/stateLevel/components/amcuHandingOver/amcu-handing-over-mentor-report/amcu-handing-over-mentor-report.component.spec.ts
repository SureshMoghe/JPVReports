import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuHandingOverMentorReportComponent } from './amcu-handing-over-mentor-report.component';

describe('AmcuHandingOverMentorReportComponent', () => {
  let component: AmcuHandingOverMentorReportComponent;
  let fixture: ComponentFixture<AmcuHandingOverMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuHandingOverMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuHandingOverMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
