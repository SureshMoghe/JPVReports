import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringRouteReportComponent } from './farmer-milk-pouring-route-report.component';

describe('FarmerMilkPouringRouteReportComponent', () => {
  let component: FarmerMilkPouringRouteReportComponent;
  let fixture: ComponentFixture<FarmerMilkPouringRouteReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringRouteReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringRouteReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
