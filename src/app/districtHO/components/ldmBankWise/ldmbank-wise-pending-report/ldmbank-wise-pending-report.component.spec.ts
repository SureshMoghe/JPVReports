import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmbankWisePendingReportComponent } from './ldmbank-wise-pending-report.component';

describe('LdmbankWisePendingReportComponent', () => {
  let component: LdmbankWisePendingReportComponent;
  let fixture: ComponentFixture<LdmbankWisePendingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmbankWisePendingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmbankWisePendingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
