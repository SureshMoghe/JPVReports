import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAsstSecMentorReportComponent } from './sec-asst-sec-mentor-report.component';

describe('SecAsstSecMentorReportComponent', () => {
  let component: SecAsstSecMentorReportComponent;
  let fixture: ComponentFixture<SecAsstSecMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAsstSecMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAsstSecMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
