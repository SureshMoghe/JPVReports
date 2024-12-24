import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBankBAUStatusDistrictReportComponent } from './farmer-bank-baustatus-district-report.component';

describe('FarmerBankBAUStatusDistrictReportComponent', () => {
  let component: FarmerBankBAUStatusDistrictReportComponent;
  let fixture: ComponentFixture<FarmerBankBAUStatusDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBankBAUStatusDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBankBAUStatusDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
