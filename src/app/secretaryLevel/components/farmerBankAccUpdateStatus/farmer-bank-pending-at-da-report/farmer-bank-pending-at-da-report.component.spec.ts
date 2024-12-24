import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBankPendingAtDaReportComponent } from './farmer-bank-pending-at-da-report.component';

describe('FarmerBankPendingAtDaReportComponent', () => {
  let component: FarmerBankPendingAtDaReportComponent;
  let fixture: ComponentFixture<FarmerBankPendingAtDaReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBankPendingAtDaReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBankPendingAtDaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
