import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuNetworkDistrictReportComponent } from './amcu-network-district-report.component';

describe('AmcuNetworkDistrictReportComponent', () => {
  let component: AmcuNetworkDistrictReportComponent;
  let fixture: ComponentFixture<AmcuNetworkDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuNetworkDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuNetworkDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
