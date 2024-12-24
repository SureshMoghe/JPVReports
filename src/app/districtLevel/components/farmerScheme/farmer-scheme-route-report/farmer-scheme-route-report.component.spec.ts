import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeRouteReportComponent } from './farmer-scheme-route-report.component';

describe('FarmerSchemeRouteReportComponent', () => {
  let component: FarmerSchemeRouteReportComponent;
  let fixture: ComponentFixture<FarmerSchemeRouteReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeRouteReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeRouteReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
