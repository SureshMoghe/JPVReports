import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsReportsComponent } from './job-details-reports.component';

describe('JobDetailsReportsComponent', () => {
  let component: JobDetailsReportsComponent;
  let fixture: ComponentFixture<JobDetailsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetailsReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
