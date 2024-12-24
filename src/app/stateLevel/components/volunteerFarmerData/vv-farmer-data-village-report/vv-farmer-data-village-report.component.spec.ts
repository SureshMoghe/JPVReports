import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerDataVillageReportComponent } from './vv-farmer-data-village-report.component';

describe('VvFarmerDataVillageReportComponent', () => {
  let component: VvFarmerDataVillageReportComponent;
  let fixture: ComponentFixture<VvFarmerDataVillageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerDataVillageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerDataVillageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
