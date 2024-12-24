import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitDetailReportComponent } from './farmer-nature-of-unit-detail-report.component';

describe('FarmerNatureOfUnitDetailReportComponent', () => {
  let component: FarmerNatureOfUnitDetailReportComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
