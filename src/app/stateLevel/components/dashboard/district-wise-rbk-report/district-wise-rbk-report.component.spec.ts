import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseRbkReportComponent } from './district-wise-rbk-report.component';

describe('DistrictWiseRbkReportComponent', () => {
  let component: DistrictWiseRbkReportComponent;
  let fixture: ComponentFixture<DistrictWiseRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictWiseRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
