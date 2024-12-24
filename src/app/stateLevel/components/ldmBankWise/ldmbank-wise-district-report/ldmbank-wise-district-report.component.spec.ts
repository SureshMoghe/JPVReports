import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmbankWiseDistrictReportComponent } from './ldmbank-wise-district-report.component';

describe('LdmbankWiseDistrictReportComponent', () => {
  let component: LdmbankWiseDistrictReportComponent;
  let fixture: ComponentFixture<LdmbankWiseDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmbankWiseDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmbankWiseDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
