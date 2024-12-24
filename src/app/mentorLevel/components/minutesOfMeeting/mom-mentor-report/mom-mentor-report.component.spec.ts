import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomMentorReportComponent } from './mom-mentor-report.component';

describe('MomMentorReportComponent', () => {
  let component: MomMentorReportComponent;
  let fixture: ComponentFixture<MomMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
