import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageWiseVillageGridReportComponent } from './village-wise-village-grid-report.component';

describe('VillageWiseVillageGridReportComponent', () => {
  let component: VillageWiseVillageGridReportComponent;
  let fixture: ComponentFixture<VillageWiseVillageGridReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageWiseVillageGridReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageWiseVillageGridReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
