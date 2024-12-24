import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageWiseVillageReportComponent } from './village-wise-village-report.component';

describe('VillageWiseVillageReportComponent', () => {
  let component: VillageWiseVillageReportComponent;
  let fixture: ComponentFixture<VillageWiseVillageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageWiseVillageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageWiseVillageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
