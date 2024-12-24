import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitMandalReportComponent } from './farmer-nature-of-unit-mandal-report.component';

describe('FarmerNatureOfUnitMandalReportComponent', () => {
  let component: FarmerNatureOfUnitMandalReportComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
