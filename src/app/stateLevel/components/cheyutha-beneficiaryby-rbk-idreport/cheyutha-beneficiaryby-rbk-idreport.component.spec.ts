import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBeneficiarybyRbkIDReportComponent } from './cheyutha-beneficiaryby-rbk-idreport.component';

describe('CheyuthaBeneficiarybyRbkIDReportComponent', () => {
  let component: CheyuthaBeneficiarybyRbkIDReportComponent;
  let fixture: ComponentFixture<CheyuthaBeneficiarybyRbkIDReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBeneficiarybyRbkIDReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBeneficiarybyRbkIDReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
