import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacBankAccVillageReportComponent } from './mdac-bank-acc-village-report.component';

describe('MdacBankAccVillageReportComponent', () => {
  let component: MdacBankAccVillageReportComponent;
  let fixture: ComponentFixture<MdacBankAccVillageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacBankAccVillageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacBankAccVillageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
