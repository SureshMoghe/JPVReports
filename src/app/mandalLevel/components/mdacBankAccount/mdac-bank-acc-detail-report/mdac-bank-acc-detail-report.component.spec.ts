import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacBankAccDetailReportComponent } from './mdac-bank-acc-detail-report.component';

describe('MdacBankAccDetailReportComponent', () => {
  let component: MdacBankAccDetailReportComponent;
  let fixture: ComponentFixture<MdacBankAccDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacBankAccDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacBankAccDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
