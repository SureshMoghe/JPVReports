import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleMilkStatusDistrictReportComponent } from './sample-milk-status-district-report.component';

describe('SampleMilkStatusDistrictReportComponent', () => {
  let component: SampleMilkStatusDistrictReportComponent;
  let fixture: ComponentFixture<SampleMilkStatusDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleMilkStatusDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleMilkStatusDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
