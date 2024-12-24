import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataRbkReportComponent } from './vv-farmer-data-rbk-report.component';

describe('VvFarmerDataRbkReportComponent', () => {
  let component: VvFarmerDataRbkReportComponent;
  let fixture: ComponentFixture<VvFarmerDataRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
