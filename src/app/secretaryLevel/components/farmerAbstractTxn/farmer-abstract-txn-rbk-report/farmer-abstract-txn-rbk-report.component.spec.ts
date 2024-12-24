import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAbstractTxnRbkReportComponent } from './farmer-abstract-txn-rbk-report.component';

describe('FarmerAbstractTxnRbkReportComponent', () => {
  let component: FarmerAbstractTxnRbkReportComponent;
  let fixture: ComponentFixture<FarmerAbstractTxnRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerAbstractTxnRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAbstractTxnRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
