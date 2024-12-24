import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistWiseDistrictReportComponent } from './dist-wise-district-report.component';

describe('DistWiseDistrictReportComponent', () => {
  let component: DistWiseDistrictReportComponent;
  let fixture: ComponentFixture<DistWiseDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistWiseDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistWiseDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
