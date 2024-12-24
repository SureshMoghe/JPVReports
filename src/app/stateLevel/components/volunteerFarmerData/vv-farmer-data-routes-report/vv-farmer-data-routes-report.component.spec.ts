import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataRoutesReportComponent } from './vv-farmer-data-routes-report.component';

describe('VvFarmerDataRoutesReportComponent', () => {
  let component: VvFarmerDataRoutesReportComponent;
  let fixture: ComponentFixture<VvFarmerDataRoutesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataRoutesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataRoutesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
