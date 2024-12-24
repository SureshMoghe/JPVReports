import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuLandAllotmentStateReportComponent } from './amcu-land-allotment-state-report.component';

describe('AmcuLandAllotmentStateReportComponent', () => {
  let component: AmcuLandAllotmentStateReportComponent;
  let fixture: ComponentFixture<AmcuLandAllotmentStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuLandAllotmentStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuLandAllotmentStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
