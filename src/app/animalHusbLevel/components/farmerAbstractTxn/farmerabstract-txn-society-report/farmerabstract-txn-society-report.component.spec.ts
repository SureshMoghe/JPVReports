import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerabstractTxnSocietyReportComponent } from './farmerabstract-txn-society-report.component';

describe('FarmerabstractTxnSocietyReportComponent', () => {
  let component: FarmerabstractTxnSocietyReportComponent;
  let fixture: ComponentFixture<FarmerabstractTxnSocietyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerabstractTxnSocietyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerabstractTxnSocietyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
