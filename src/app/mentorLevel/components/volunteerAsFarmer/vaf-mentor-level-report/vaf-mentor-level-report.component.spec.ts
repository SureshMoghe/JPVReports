import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VafMentorLevelReportComponent } from './vaf-mentor-level-report.component';

describe('VafMentorLevelReportComponent', () => {
  let component: VafMentorLevelReportComponent;
  let fixture: ComponentFixture<VafMentorLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VafMentorLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VafMentorLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
