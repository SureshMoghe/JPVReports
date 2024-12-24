import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvHHAnimalsDistrictReportComponent } from './vv-hhanimals-district-report.component';

describe('VvHHAnimalsDistrictReportComponent', () => {
  let component: VvHHAnimalsDistrictReportComponent;
  let fixture: ComponentFixture<VvHHAnimalsDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvHHAnimalsDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvHHAnimalsDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
