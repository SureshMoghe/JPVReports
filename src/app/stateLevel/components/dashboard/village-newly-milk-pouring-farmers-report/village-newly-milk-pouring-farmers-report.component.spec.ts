import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageNewlyMilkPouringFarmersReportComponent } from './village-newly-milk-pouring-farmers-report.component';

describe('VillageNewlyMilkPouringFarmersReportComponent', () => {
  let component: VillageNewlyMilkPouringFarmersReportComponent;
  let fixture: ComponentFixture<VillageNewlyMilkPouringFarmersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageNewlyMilkPouringFarmersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageNewlyMilkPouringFarmersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
