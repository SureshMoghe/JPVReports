import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuInspectionStateReportComponent } from './amcu-inspection-state-report.component';

describe('AmcuInspectionStateReportComponent', () => {
  let component: AmcuInspectionStateReportComponent;
  let fixture: ComponentFixture<AmcuInspectionStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuInspectionStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuInspectionStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
