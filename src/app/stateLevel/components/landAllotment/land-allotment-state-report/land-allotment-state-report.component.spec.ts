import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandAllotmentStateReportComponent } from './land-allotment-state-report.component';

describe('LandAllotmentStateReportComponent', () => {
  let component: LandAllotmentStateReportComponent;
  let fixture: ComponentFixture<LandAllotmentStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandAllotmentStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandAllotmentStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
