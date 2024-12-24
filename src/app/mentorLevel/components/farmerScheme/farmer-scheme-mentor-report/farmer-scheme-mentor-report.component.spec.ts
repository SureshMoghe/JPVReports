import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeMentorReportComponent } from './farmer-scheme-mentor-report.component';

describe('FarmerSchemeMentorReportComponent', () => {
  let component: FarmerSchemeMentorReportComponent;
  let fixture: ComponentFixture<FarmerSchemeMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
