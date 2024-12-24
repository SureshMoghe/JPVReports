import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegVillageReportComponent } from './farmer-reg-village-report.component';

describe('FarmerRegVillageReportComponent', () => {
  let component: FarmerRegVillageReportComponent;
  let fixture: ComponentFixture<FarmerRegVillageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRegVillageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRegVillageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
