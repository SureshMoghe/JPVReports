import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VafDistrictLevelReportComponent } from './vaf-district-level-report.component';

describe('VafDistrictLevelReportComponent', () => {
  let component: VafDistrictLevelReportComponent;
  let fixture: ComponentFixture<VafDistrictLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VafDistrictLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VafDistrictLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
