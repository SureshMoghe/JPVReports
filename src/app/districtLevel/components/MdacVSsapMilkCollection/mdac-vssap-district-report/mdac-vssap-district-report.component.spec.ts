import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacVSsapDistrictReportComponent } from './mdac-vssap-district-report.component';

describe('MdacVSsapDistrictReportComponent', () => {
  let component: MdacVSsapDistrictReportComponent;
  let fixture: ComponentFixture<MdacVSsapDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacVSsapDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacVSsapDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
