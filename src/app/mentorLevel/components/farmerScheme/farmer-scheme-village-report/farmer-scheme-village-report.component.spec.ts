import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeVillageReportComponent } from './farmer-scheme-village-report.component';

describe('FarmerSchemeVillageReportComponent', () => {
  let component: FarmerSchemeVillageReportComponent;
  let fixture: ComponentFixture<FarmerSchemeVillageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeVillageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeVillageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
