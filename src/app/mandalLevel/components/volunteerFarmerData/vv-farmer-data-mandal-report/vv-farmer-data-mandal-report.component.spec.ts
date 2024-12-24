import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataMandalReportComponent } from './vv-farmer-data-mandal-report.component';

describe('VvFarmerDataMandalReportComponent', () => {
  let component: VvFarmerDataMandalReportComponent;
  let fixture: ComponentFixture<VvFarmerDataMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
