import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMpussRegVillageReportComponent } from './farmer-mpuss-reg-village-report.component';

describe('FarmerMpussRegVillageReportComponent', () => {
  let component: FarmerMpussRegVillageReportComponent;
  let fixture: ComponentFixture<FarmerMpussRegVillageReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMpussRegVillageReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMpussRegVillageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
