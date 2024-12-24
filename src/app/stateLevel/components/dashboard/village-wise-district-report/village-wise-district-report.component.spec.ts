import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageWiseDistrictReportComponent } from './village-wise-district-report.component';

describe('VillageWiseDistrictReportComponent', () => {
  let component: VillageWiseDistrictReportComponent;
  let fixture: ComponentFixture<VillageWiseDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageWiseDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageWiseDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
