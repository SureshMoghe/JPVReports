import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBankBAUStatusRbkReportComponent } from './farmer-bank-baustatus-rbk-report.component';

describe('FarmerBankBAUStatusRbkReportComponent', () => {
  let component: FarmerBankBAUStatusRbkReportComponent;
  let fixture: ComponentFixture<FarmerBankBAUStatusRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBankBAUStatusRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBankBAUStatusRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
