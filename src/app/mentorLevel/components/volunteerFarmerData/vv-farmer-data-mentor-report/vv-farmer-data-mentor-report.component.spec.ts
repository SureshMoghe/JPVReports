import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataMentorReportComponent } from './vv-farmer-data-mentor-report.component';

describe('VvFarmerDataMentorReportComponent', () => {
  let component: VvFarmerDataMentorReportComponent;
  let fixture: ComponentFixture<VvFarmerDataMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
