import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingPromotersReportComponent } from './village-meeting-promoters-report.component';

describe('VillageMeetingPromotersReportComponent', () => {
  let component: VillageMeetingPromotersReportComponent;
  let fixture: ComponentFixture<VillageMeetingPromotersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingPromotersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingPromotersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
