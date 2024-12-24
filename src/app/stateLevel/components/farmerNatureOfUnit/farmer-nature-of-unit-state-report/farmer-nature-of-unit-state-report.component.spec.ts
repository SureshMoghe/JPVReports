import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitStateReportComponent } from './farmer-nature-of-unit-state-report.component';

describe('FarmerNatureOfUnitStateReportComponent', () => {
  let component: FarmerNatureOfUnitStateReportComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
