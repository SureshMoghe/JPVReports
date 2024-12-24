import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmbankWiseMandalReportComponent } from './ldmbank-wise-mandal-report.component';

describe('LdmbankWiseMandalReportComponent', () => {
  let component: LdmbankWiseMandalReportComponent;
  let fixture: ComponentFixture<LdmbankWiseMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmbankWiseMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmbankWiseMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
