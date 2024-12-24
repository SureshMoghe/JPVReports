import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringCertDashboardComponent } from './farmer-milk-pouring-cert-dashboard.component';

describe('FarmerMilkPouringCertDashboardComponent', () => {
  let component: FarmerMilkPouringCertDashboardComponent;
  let fixture: ComponentFixture<FarmerMilkPouringCertDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringCertDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringCertDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
