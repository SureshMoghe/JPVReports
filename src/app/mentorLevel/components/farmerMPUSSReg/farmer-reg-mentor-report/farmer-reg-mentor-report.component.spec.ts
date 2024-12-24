import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegMentorReportComponent } from './farmer-reg-mentor-report.component';

describe('FarmerRegMentorReportComponent', () => {
  let component: FarmerRegMentorReportComponent;
  let fixture: ComponentFixture<FarmerRegMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRegMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRegMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
