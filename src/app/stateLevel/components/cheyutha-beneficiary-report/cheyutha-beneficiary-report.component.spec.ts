import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheyuthaBeneficiaryReportComponent } from './cheyutha-beneficiary-report.component';

describe('CheyuthaBeneficiaryReportComponent', () => {
  let component: CheyuthaBeneficiaryReportComponent;
  let fixture: ComponentFixture<CheyuthaBeneficiaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheyuthaBeneficiaryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheyuthaBeneficiaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
