import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageWiseFarmerGridReportComponent } from './village-wise-farmer-grid-report.component';

describe('VillageWiseFarmerGridReportComponent', () => {
  let component: VillageWiseFarmerGridReportComponent;
  let fixture: ComponentFixture<VillageWiseFarmerGridReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageWiseFarmerGridReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageWiseFarmerGridReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
