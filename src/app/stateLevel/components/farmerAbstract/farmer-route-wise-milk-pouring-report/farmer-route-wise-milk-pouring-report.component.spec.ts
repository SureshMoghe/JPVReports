import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRouteWiseMilkPouringReportComponent } from './farmer-route-wise-milk-pouring-report.component';

describe('FarmerRouteWiseMilkPouringReportComponent', () => {
  let component: FarmerRouteWiseMilkPouringReportComponent;
  let fixture: ComponentFixture<FarmerRouteWiseMilkPouringReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRouteWiseMilkPouringReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRouteWiseMilkPouringReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
