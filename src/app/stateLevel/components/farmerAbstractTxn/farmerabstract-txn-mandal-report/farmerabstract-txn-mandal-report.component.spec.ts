import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerabstractTxnMandalReportComponent } from './farmerabstract-txn-mandal-report.component';

describe('FarmerabstractTxnMandalReportComponent', () => {
  let component: FarmerabstractTxnMandalReportComponent;
  let fixture: ComponentFixture<FarmerabstractTxnMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerabstractTxnMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerabstractTxnMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
