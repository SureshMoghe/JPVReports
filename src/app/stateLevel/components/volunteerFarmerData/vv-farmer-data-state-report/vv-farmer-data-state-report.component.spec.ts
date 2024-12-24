import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataStateReportComponent } from './vv-farmer-data-state-report.component';

describe('VvFarmerDataStateReportComponent', () => {
  let component: VvFarmerDataStateReportComponent;
  let fixture: ComponentFixture<VvFarmerDataStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
