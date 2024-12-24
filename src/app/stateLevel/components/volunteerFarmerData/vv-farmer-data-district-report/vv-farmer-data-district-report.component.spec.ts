import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataDistrictReportComponent } from './vv-farmer-data-district-report.component';

describe('VvFarmerDataDistrictReportComponent', () => {
  let component: VvFarmerDataDistrictReportComponent;
  let fixture: ComponentFixture<VvFarmerDataDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
