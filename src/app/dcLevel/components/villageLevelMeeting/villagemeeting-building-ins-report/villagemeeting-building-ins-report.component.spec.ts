import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagemeetingBuildingInsReportComponent } from './villagemeeting-building-ins-report.component';

describe('VillagemeetingBuildingInsReportComponent', () => {
  let component: VillagemeetingBuildingInsReportComponent;
  let fixture: ComponentFixture<VillagemeetingBuildingInsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagemeetingBuildingInsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagemeetingBuildingInsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
