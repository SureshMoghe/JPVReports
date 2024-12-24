import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNoofRbkCountReportComponent } from './dashboard-noof-rbk-count-report.component';

describe('DashboardNoofRbkCountReportComponent', () => {
  let component: DashboardNoofRbkCountReportComponent;
  let fixture: ComponentFixture<DashboardNoofRbkCountReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNoofRbkCountReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNoofRbkCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
