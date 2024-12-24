import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmbankWiseRbkReportComponent } from './ldmbank-wise-rbk-report.component';

describe('LdmbankWiseRbkReportComponent', () => {
  let component: LdmbankWiseRbkReportComponent;
  let fixture: ComponentFixture<LdmbankWiseRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmbankWiseRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmbankWiseRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
