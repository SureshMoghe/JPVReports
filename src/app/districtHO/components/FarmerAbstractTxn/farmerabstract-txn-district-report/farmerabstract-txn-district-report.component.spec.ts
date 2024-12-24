import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerabstractTxnDistrictReportComponent } from './farmerabstract-txn-district-report.component';

describe('FarmerabstractTxnDistrictReportComponent', () => {
  let component: FarmerabstractTxnDistrictReportComponent;
  let fixture: ComponentFixture<FarmerabstractTxnDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerabstractTxnDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerabstractTxnDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
