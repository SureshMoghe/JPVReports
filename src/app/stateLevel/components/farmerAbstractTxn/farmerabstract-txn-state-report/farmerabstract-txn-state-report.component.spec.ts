import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerabstractTxnStateReportComponent } from './farmerabstract-txn-state-report.component';

describe('FarmerabstractTxnStateReportComponent', () => {
  let component: FarmerabstractTxnStateReportComponent;
  let fixture: ComponentFixture<FarmerabstractTxnStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerabstractTxnStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerabstractTxnStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
