import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringDetailReportComponent } from './farmer-milk-pouring-detail-report.component';

describe('FarmerMilkPouringDetailReportComponent', () => {
  let component: FarmerMilkPouringDetailReportComponent;
  let fixture: ComponentFixture<FarmerMilkPouringDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
