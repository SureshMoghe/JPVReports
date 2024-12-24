import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundingDistrictLevelReportComponent } from './grounding-district-level-report.component';

describe('GroundingDistrictLevelReportComponent', () => {
  let component: GroundingDistrictLevelReportComponent;
  let fixture: ComponentFixture<GroundingDistrictLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundingDistrictLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundingDistrictLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
