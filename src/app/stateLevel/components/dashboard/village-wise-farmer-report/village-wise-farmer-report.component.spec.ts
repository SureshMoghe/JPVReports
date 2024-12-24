import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageWiseFarmerReportComponent } from './village-wise-farmer-report.component';

describe('VillageWiseFarmerReportComponent', () => {
  let component: VillageWiseFarmerReportComponent;
  let fixture: ComponentFixture<VillageWiseFarmerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageWiseFarmerReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageWiseFarmerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
