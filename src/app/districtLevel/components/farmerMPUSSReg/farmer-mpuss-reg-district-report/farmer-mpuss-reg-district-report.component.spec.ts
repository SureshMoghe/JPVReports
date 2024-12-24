import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMpussRegDistrictReportComponent } from './farmer-mpuss-reg-district-report.component';

describe('FarmerMpussRegDistrictReportComponent', () => {
  let component: FarmerMpussRegDistrictReportComponent;
  let fixture: ComponentFixture<FarmerMpussRegDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMpussRegDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMpussRegDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
