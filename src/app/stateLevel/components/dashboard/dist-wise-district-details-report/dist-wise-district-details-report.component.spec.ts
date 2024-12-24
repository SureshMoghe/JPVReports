import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistWiseDistrictDetailsReportComponent } from './dist-wise-district-details-report.component';

describe('DistWiseDistrictDetailsReportComponent', () => {
  let component: DistWiseDistrictDetailsReportComponent;
  let fixture: ComponentFixture<DistWiseDistrictDetailsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistWiseDistrictDetailsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistWiseDistrictDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
