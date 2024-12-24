import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingBuildingInsReportComponent } from './village-meeting-building-ins-report.component';

describe('VillageMeetingBuildingInsReportComponent', () => {
  let component: VillageMeetingBuildingInsReportComponent;
  let fixture: ComponentFixture<VillageMeetingBuildingInsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingBuildingInsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingBuildingInsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
