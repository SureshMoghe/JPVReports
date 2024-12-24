import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkComparativeTxnReportComponent } from './milk-comparative-txn-report.component';

describe('MilkComparativeTxnReportComponent', () => {
  let component: MilkComparativeTxnReportComponent;
  let fixture: ComponentFixture<MilkComparativeTxnReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkComparativeTxnReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkComparativeTxnReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
