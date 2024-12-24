import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringMentorReportComponent } from './farmer-milk-pouring-mentor-report.component';

describe('FarmerMilkPouringMentorReportComponent', () => {
  let component: FarmerMilkPouringMentorReportComponent;
  let fixture: ComponentFixture<FarmerMilkPouringMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
