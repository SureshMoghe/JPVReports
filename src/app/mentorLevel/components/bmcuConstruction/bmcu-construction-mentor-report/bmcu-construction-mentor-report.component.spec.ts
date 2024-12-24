import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuConstructionMentorReportComponent } from './bmcu-construction-mentor-report.component';

describe('BmcuConstructionMentorReportComponent', () => {
  let component: BmcuConstructionMentorReportComponent;
  let fixture: ComponentFixture<BmcuConstructionMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuConstructionMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuConstructionMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
