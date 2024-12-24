import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBankBAUStatusMandalReportComponent } from './farmer-bank-baustatus-mandal-report.component';

describe('FarmerBankBAUStatusMandalReportComponent', () => {
  let component: FarmerBankBAUStatusMandalReportComponent;
  let fixture: ComponentFixture<FarmerBankBAUStatusMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBankBAUStatusMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBankBAUStatusMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
