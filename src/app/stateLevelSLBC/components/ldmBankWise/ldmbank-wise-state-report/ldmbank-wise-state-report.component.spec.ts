import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmbankWiseStateReportComponent } from './ldmbank-wise-state-report.component';

describe('LdmbankWiseStateReportComponent', () => {
  let component: LdmbankWiseStateReportComponent;
  let fixture: ComponentFixture<LdmbankWiseStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmbankWiseStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmbankWiseStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
