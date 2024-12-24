import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBankBAUStatusStateReportComponent } from './farmer-bank-baustatus-state-report.component';

describe('FarmerBankBAUStatusStateReportComponent', () => {
  let component: FarmerBankBAUStatusStateReportComponent;
  let fixture: ComponentFixture<FarmerBankBAUStatusStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBankBAUStatusStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBankBAUStatusStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
