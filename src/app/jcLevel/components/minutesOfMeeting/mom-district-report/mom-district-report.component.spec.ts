import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomDistrictReportComponent } from './mom-district-report.component';

describe('MomDistrictReportComponent', () => {
  let component: MomDistrictReportComponent;
  let fixture: ComponentFixture<MomDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
