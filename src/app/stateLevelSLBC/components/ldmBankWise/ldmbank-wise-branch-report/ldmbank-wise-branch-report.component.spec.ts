import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmbankWiseBranchReportComponent } from './ldmbank-wise-branch-report.component';

describe('LdmbankWiseBranchReportComponent', () => {
  let component: LdmbankWiseBranchReportComponent;
  let fixture: ComponentFixture<LdmbankWiseBranchReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmbankWiseBranchReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmbankWiseBranchReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
