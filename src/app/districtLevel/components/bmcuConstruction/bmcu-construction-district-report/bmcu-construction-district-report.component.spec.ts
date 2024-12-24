import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcuConstructionDistrictReportComponent } from './bmcu-construction-district-report.component';

describe('BmcuConstructionDistrictReportComponent', () => {
  let component: BmcuConstructionDistrictReportComponent;
  let fixture: ComponentFixture<BmcuConstructionDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmcuConstructionDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmcuConstructionDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
